import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useSyncExternalStore,
  CSSProperties,
  ReactNode,
} from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface HorizonBloomHandle {
  bloom: (x?: number, strength?: number) => void;
  replay: () => void;
}

export type HorizonBloomPreset =
  | "dawn"
  | "eclipse"
  | "crescent"
  | "aurora"
  | "overhead"
  | "edge"
  | "twilight"
  | "halo";

export interface HorizonBloomProps {
  colors?: [string, string];
  backgroundColor?: string;
  horizon?: number;
  curvature?: number;
  tilt?: number;
  sunPosition?: number;
  sunrise?: number;
  spread?: number;
  atmosphere?: number;
  thickness?: number;
  rim?: number;
  flare?: number;
  airglow?: number;
  clouds?: number;
  stars?: number;
  aurora?: number;
  autoAurora?: boolean;
  speed?: number;
  drift?: number;
  parallax?: number;
  bloom?: number;
  grain?: number;
  interactive?: boolean;
  intro?: boolean;
  paused?: boolean;
  dpr?: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));
const numOrDefault = (val: number | undefined, def: number) => (Number.isFinite(val) ? (val as number) : def);

const tempColor = new THREE.Color();
const parseColor = (col: string): [number, number, number] | null => {
  const t = col.trim().toLowerCase();
  if (!t || t === "transparent" || t === "none" || t === "auto") return null;
  try {
    tempColor.setStyle(t);
    return [tempColor.r, tempColor.g, tempColor.b];
  } catch {
    return null;
  }
};

const srgbToLinear = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const linearToSrgb = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

const srgbToOklab = ([r, g, b]: [number, number, number]): [number, number, number] => {
  const lr = srgbToLinear(r), lg = srgbToLinear(g), lb = srgbToLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
};

const oklabToSrgb = ([L, a, b]: [number, number, number]): [number, number, number] => {
  const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
  const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
  const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
  return [
    clamp(linearToSrgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s), 0, 1),
    clamp(linearToSrgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s), 0, 1),
    clamp(linearToSrgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s), 0, 1),
  ];
};

const mixOklab = (
  c1: [number, number, number],
  c2: [number, number, number],
  t: number
): [number, number, number] => [c1[0] + (c2[0] - c1[0]) * t, c1[1] + (c2[1] - c1[1]) * t, c1[2] + (c2[2] - c1[2]) * t];

const subscribeMotion = (cb: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const getReducedMotionSnapshot = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const VERTEX_SHADER = "\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = vec4(position.xy, 0.0, 1.0);\n}\n";
const PLANET_FRAGMENT_SHADER = "\nuniform vec2 uRes;\nuniform float uTime;\nuniform float uRoll;\nuniform float uApex;\nuniform float uRadius;\nuniform float uSunArc;\nuniform float uSpread;\nuniform float uSunUp;\nuniform float uAtmo;\nuniform float uThick;\nuniform float uRimGain;\nuniform float uFlare;\nuniform float uAirglow;\nuniform float uClouds;\nuniform float uStars;\nuniform float uAuroraGain;\nuniform vec4 uAuroras[8];\nuniform float uInk;\nuniform vec3 uRimColor;\nuniform vec3 uInner;\nuniform vec3 uMid;\nuniform vec3 uOuter;\nuniform vec3 uGlowColor;\nuniform vec3 uSunColor;\nuniform vec3 uStarColor;\nvarying vec2 vUv;\n\nfloat hash(vec2 p) {\n  vec3 p3 = fract(vec3(p.xyx) * 0.1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nfloat noise(vec2 p) {\n  vec2 i = floor(p);\n  vec2 f = fract(p);\n  f = f * f * (3.0 - 2.0 * f);\n  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);\n}\n\nfloat fbm(vec2 p) {\n  float v = 0.0;\n  float a = 0.5;\n  for (int i = 0; i < 4; i++) {\n    v += a * noise(p);\n    p = p * 2.03 + vec2(1.7, 9.2);\n    a *= 0.5;\n  }\n  return v;\n}\n\nvec3 starField(vec2 p) {\n  vec3 c = vec3(0.0);\n  for (int k = 0; k < 2; k++) {\n    float scale = k == 0 ? 70.0 : 130.0;\n    vec2 g = p * scale + float(k) * 17.3;\n    vec2 id = floor(g);\n    vec2 f = fract(g) - 0.5;\n    float h = hash(id);\n    vec2 offset = vec2(hash(id + 3.1), hash(id + 7.7)) - 0.5;\n    float twinkle = 0.6 + 0.4 * sin(uTime * (1.0 + 3.0 * hash(id + 1.3)) + h * 50.0);\n    float b = pow(h, 30.0) * twinkle;\n    float d = length(f - offset * 0.7);\n    c += uStarColor * b * exp(-d * d * 300.0) * (k == 0 ? 0.9 : 0.45);\n  }\n  return c;\n}\n\nvoid main() {\n  vec2 frag = vUv * uRes;\n  vec2 screen = (frag - 0.5 * uRes) / uRes.y;\n  float cr = cos(uRoll);\n  float sr = sin(uRoll);\n  vec2 p = mat2(cr, -sr, sr, cr) * screen;\n  float px = 1.0 / uRes.y;\n  vec2 center = vec2(0.0, uApex - uRadius);\n  vec2 q = p - center;\n  float h = length(q) - uRadius;\n  float arc = atan(q.x, q.y) * uRadius;\n  float d = arc - uSunArc;\n  float lit = exp(-d * d / (2.0 * uSpread * uSpread));\n  float wide = exp(-d * d / (10.0 * uSpread * uSpread));\n  float hot = exp(-d * d / (2.0 * 0.034 * 0.034));\n  float halo = exp(-d * d / (2.0 * 0.17 * 0.17));\n  float thick = uThick;\n  float sunk = 1.0 - 0.8 * uInk;\n  vec3 col = vec3(0.0);\n  if (h > 0.0) {\n    float rim = exp(-h / max(0.0012, px * 0.9));\n    float inner = exp(-h / (0.007 * thick));\n    float mid = exp(-h / (0.024 * thick));\n    float outer = exp(-h / (0.07 * thick));\n    col += lit * (rim * uRimColor * 2.2 * uRimGain + inner * uInner * 0.7 * uAtmo);\n    col += wide * (mid * uMid * 0.2 + outer * uOuter * 0.055) * uAtmo;\n    float layer = h - 0.042 * thick;\n    float band = exp(-layer * layer / (0.00005 * thick * thick));\n    if (uAirglow > 0.0 && band > 0.0001) {\n      band *= 0.35 + 0.65 * fbm(vec2(arc * 9.0 - uTime * 0.04, uTime * 0.02));\n      col += band * uGlowColor * 0.05 * (0.2 + 0.8 * wide) * uAirglow;\n    }\n    col += sunk * hot * uSunUp * (exp(-h / 0.003) * uSunColor * 4.0 + exp(-h / (0.016 * thick)) * uInner * 0.7);\n    col += halo * uSunUp * (exp(-h / (0.045 * thick)) * uInner * 0.2 + exp(-h / (0.12 * thick)) * uMid * 0.06) * uAtmo;\n    if (uStars > 0.0 && uInk < 0.5) col += starField(p) * smoothstep(0.04, 0.2, h) * (1.0 - 0.8 * wide) * uStars;\n  } else {\n    col += lit * exp(h / max(0.0008, px * 0.6)) * uRimColor * 1.1 * uRimGain;\n    col += sunk * hot * uSunUp * exp(h / 0.005) * uMid * 0.3;\n    if (uClouds > 0.0 && h > -0.12) {\n      float tops = fbm(vec2(arc * 22.0 + uTime * 0.01, h * 160.0 + arc * 6.0));\n      float catchLight = smoothstep(0.52, 0.78, tops) * exp(h / 0.018) * smoothstep(-0.12, -0.07, h) * lit;\n      col += catchLight * mix(uMid, uInner, halo) * 0.14 * uClouds * uSunUp;\n    }\n  }\n  vec2 sun = center + uRadius * vec2(sin(uSunArc / uRadius), cos(uSunArc / uRadius));\n  float rs = length(p - sun);\n  float crest = smoothstep(-0.0015, 0.0015, h);\n  col += uSunUp * uSunUp * uFlare * sunk * (exp(-rs / 0.005) * uSunColor * 2.0 * crest + exp(-rs / 0.05) * uInner * 0.07);\n  if (h > 0.0 && h < 0.42) {\n    for (int i = 0; i < 8; i++) {\n      vec4 aurora = uAuroras[i];\n      if (aurora.z <= 0.0) continue;\n      float age = aurora.y;\n      float width = 0.09 + 0.12 * smoothstep(0.0, 2.5, age);\n      float dc = arc - aurora.x;\n      if (abs(dc) > width * 3.0) continue;\n      float span = max(exp(-dc * dc / (2.0 * width * width)) - 0.0111, 0.0) / 0.9889;\n      float envelope = smoothstep(0.0, 1.4, age) * (1.0 - smoothstep(2.6, 6.6, age)) * aurora.z;\n      float drift = uTime * 0.03 + aurora.w;\n      float fine = noise(vec2(arc * 140.0 + drift * 5.0, aurora.w + age * 0.15));\n      float fold = noise(vec2(arc * 30.0 - drift * 2.0, aurora.w + 4.0));\n      float rays = (0.2 + 0.8 * fine * fine) * (0.45 + 0.55 * fold);\n      float reach = (0.04 + 0.08 * noise(vec2(arc * 46.0 + aurora.w * 3.0, drift * 0.5))) * (0.5 + 0.5 * smoothstep(0.0, 2.2, age));\n      float base = 0.007 + 0.004 * fold;\n      float lower = smoothstep(base * 0.4, base + 0.006, h);\n      float y = max(h - base, 0.0);\n      float body = exp(-y / reach) * (1.0 - smoothstep(0.12, 0.38, h));\n      float glow = exp(-y / 0.02) * 0.2;\n      vec3 tint = mix(uInner, uMid, smoothstep(0.0, 0.05, y));\n      tint = mix(tint, uOuter, smoothstep(0.05, 0.16, y));\n      col += span * lower * (body * rays + glow * (0.5 + 0.5 * fold)) * envelope * tint * 0.9 * uAuroraGain;\n    }\n  }\n  if (uInk > 0.5) {\n    float peak = max(col.r, max(col.g, col.b));\n    float alpha = 1.0 - exp(-peak * 1.5);\n    gl_FragColor = vec4(col / max(peak, 0.0001) * alpha, alpha);\n  } else {\n    gl_FragColor = vec4(col, 1.0);\n  }\n}\n";
const DOWNSAMPLE_FRAGMENT_SHADER = "\nuniform sampler2D uSource;\nuniform vec2 uTexel;\nuniform float uThreshold;\nvarying vec2 vUv;\nvec3 tap(vec2 d) {\n  vec3 c = texture2D(uSource, vUv + d * uTexel).rgb;\n  float peak = max(c.r, max(c.g, c.b));\n  return c * (max(peak - uThreshold, 0.0) / max(peak, 0.0001));\n}\nvoid main() {\n  vec3 a = tap(vec2(-2.0, 2.0));\n  vec3 b = tap(vec2(0.0, 2.0));\n  vec3 c = tap(vec2(2.0, 2.0));\n  vec3 d = tap(vec2(-2.0, 0.0));\n  vec3 e = tap(vec2(0.0, 0.0));\n  vec3 f = tap(vec2(2.0, 0.0));\n  vec3 g = tap(vec2(-2.0, -2.0));\n  vec3 h = tap(vec2(0.0, -2.0));\n  vec3 i = tap(vec2(2.0, -2.0));\n  vec3 j = tap(vec2(-1.0, 1.0));\n  vec3 k = tap(vec2(1.0, 1.0));\n  vec3 l = tap(vec2(-1.0, -1.0));\n  vec3 m = tap(vec2(1.0, -1.0));\n  vec3 color = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;\n  gl_FragColor = vec4(color, 1.0);\n}\n";
const UPSAMPLE_FRAGMENT_SHADER = "\nuniform sampler2D uSource;\nuniform vec2 uTexel;\nvarying vec2 vUv;\nvec3 tap(vec2 d) { return texture2D(uSource, vUv + d * uTexel).rgb; }\nvoid main() {\n  vec3 color = tap(vec2(0.0)) * 4.0\n    + (tap(vec2(-1.0, 0.0)) + tap(vec2(1.0, 0.0)) + tap(vec2(0.0, -1.0)) + tap(vec2(0.0, 1.0))) * 2.0\n    + tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0));\n  gl_FragColor = vec4(color / 16.0, 1.0);\n}\n";
const COMPOSITE_FRAGMENT_SHADER = "\nuniform sampler2D uScene;\nuniform sampler2D uBloom;\nuniform vec3 uBackground;\nuniform vec2 uResolution;\nuniform float uBloomStrength;\nuniform float uGrain;\nuniform float uTime;\nuniform float uInk;\nvarying vec2 vUv;\n\nvec3 neutral(vec3 color) {\n  const float start = 0.76;\n  const float desaturation = 0.15;\n  float x = min(color.r, min(color.g, color.b));\n  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n  color -= offset;\n  float peak = max(color.r, max(color.g, color.b));\n  if (peak < start) return color;\n  const float d = 1.0 - start;\n  float next = 1.0 - d * d / (peak + d - start);\n  color *= next / peak;\n  float g = 1.0 - 1.0 / (desaturation * (peak - next) + 1.0);\n  return mix(color, vec3(next), g);\n}\n\nfloat hash(vec2 p) {\n  vec3 p3 = fract(vec3(p.xyx) * 0.1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nvoid main() {\n  float n = hash(gl_FragCoord.xy + fract(uTime * 13.0) * 911.0) - 0.5;\n  if (uInk > 0.5) {\n    vec4 scene = texture2D(uScene, vUv);\n    float cover = clamp(scene.a, 0.0, 1.0);\n    vec3 ink = scene.rgb / max(scene.a, 0.0001);\n    vec3 color = mix(uBackground, ink, cover);\n    color += n * uGrain * 0.05 * smoothstep(0.0, 0.05, cover);\n    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);\n    return;\n  }\n  vec2 c = vUv - 0.5;\n  vec2 shift = c * 1.2 / uResolution.y;\n  vec3 emission;\n  emission.r = texture2D(uScene, vUv + shift).r;\n  emission.g = texture2D(uScene, vUv).g;\n  emission.b = texture2D(uScene, vUv - shift).b;\n  emission += texture2D(uBloom, vUv).rgb * uBloomStrength;\n  vec3 light = neutral(max(emission, 0.0));\n  light = pow(light, vec3(1.0 / 2.2));\n  vec3 color = 1.0 - (1.0 - uBackground) * (1.0 - light);\n  float l = max(light.r, max(light.g, light.b));\n  float mask = smoothstep(0.0, 0.04, l);\n  color += n * uGrain * 0.1 * mask;\n  color += (hash(gl_FragCoord.xy * 1.7) - 0.5) / 255.0 * mask;\n  gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);\n}\n";

export const HORIZON_BLOOM_PRESETS: Record<HorizonBloomPreset, Partial<HorizonBloomProps>> = {
  dawn: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.72,
    curvature: 1,
    tilt: 0,
    sunPosition: 0.15,
    sunrise: 1,
    spread: 0.4,
    atmosphere: 1,
    thickness: 1,
    rim: 1,
    flare: 1,
    airglow: 0.5,
    clouds: 0.5,
    stars: 0.5,
    aurora: 1,
    autoAurora: false,
  },
  eclipse: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.62,
    curvature: 4.5,
    tilt: 0,
    sunPosition: 0,
    sunrise: 1,
    spread: 3,
    atmosphere: 1,
    thickness: 1,
    rim: 1,
    flare: 1.3,
    airglow: 0.5,
    clouds: 0.5,
    stars: 1,
    aurora: 1,
    autoAurora: false,
  },
  crescent: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.7,
    curvature: 2.4,
    tilt: 24,
    sunPosition: -0.75,
    sunrise: 1,
    spread: 0.45,
    atmosphere: 1.4,
    thickness: 1,
    rim: 1,
    flare: 1.2,
    airglow: 0.5,
    clouds: 0.5,
    stars: 1,
    aurora: 1,
    autoAurora: false,
  },
  aurora: {
    colors: ["#B19EEF", "#5227FF"],
    horizon: 0.72,
    curvature: 1,
    tilt: 0,
    sunPosition: 0.15,
    sunrise: 0.2,
    spread: 0.3,
    atmosphere: 1,
    thickness: 1,
    rim: 1,
    flare: 1,
    airglow: 1.2,
    clouds: 0.5,
    stars: 1.2,
    aurora: 1.4,
    autoAurora: true,
  },
  overhead: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.76,
    curvature: 1,
    tilt: 180,
    sunPosition: -0.25,
    sunrise: 1,
    spread: 0.55,
    atmosphere: 1,
    thickness: 1,
    rim: 1,
    flare: 1,
    airglow: 0.5,
    clouds: 0.5,
    stars: 0.5,
    aurora: 1,
    autoAurora: false,
  },
  edge: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.8,
    curvature: 0.7,
    tilt: -90,
    sunPosition: 0.2,
    sunrise: 1,
    spread: 0.5,
    atmosphere: 1,
    thickness: 1,
    rim: 1,
    flare: 1,
    airglow: 0.5,
    clouds: 0.5,
    stars: 0.8,
    aurora: 1,
    autoAurora: false,
  },
  twilight: {
    colors: ["#FF9FFC", "#7C5CFF"],
    horizon: 0.58,
    curvature: 0.35,
    tilt: 0,
    sunPosition: -0.45,
    sunrise: 1,
    spread: 1.1,
    atmosphere: 1.7,
    thickness: 1.8,
    rim: 0.7,
    flare: 0.7,
    airglow: 0.5,
    clouds: 0.5,
    stars: 0.3,
    aurora: 1,
    autoAurora: false,
  },
  halo: {
    colors: ["#FF9FFC", "#5227FF"],
    horizon: 0.72,
    curvature: 1,
    tilt: 0,
    sunPosition: 0.15,
    sunrise: 0,
    spread: 1.4,
    atmosphere: 0.45,
    thickness: 1,
    rim: 1.3,
    flare: 0,
    airglow: 0,
    clouds: 0,
    stars: 0,
    aurora: 1,
    autoAurora: false,
  },
};

export const HorizonBloom = forwardRef<HorizonBloomHandle, HorizonBloomProps>(function HorizonBloom(
  {
    colors = ["#FF9FFC", "#5227FF"],
    backgroundColor = "transparent",
    horizon = 0.72,
    curvature = 1,
    tilt = 0,
    sunPosition = 0.15,
    sunrise = 1,
    spread = 0.4,
    atmosphere = 1,
    thickness = 1,
    rim = 1,
    flare = 1,
    airglow = 0.5,
    clouds = 0.5,
    stars = 0.5,
    aurora = 1,
    autoAurora = false,
    speed = 0.5,
    drift = 0.5,
    parallax = 0.5,
    bloom = 0.5,
    grain = 0.25,
    interactive = true,
    intro = true,
    paused = false,
    dpr = 2,
    children,
    className,
    style,
  },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const runtimeRef = useRef<{
    sync: () => void;
    bloom: (x?: number, strength?: number) => void;
    replay: () => void;
    destroy: () => void;
  } | null>(null);

  const reducedMotion = useSyncExternalStore(subscribeMotion, getReducedMotionSnapshot, () => false);

  const propsRef = useRef({
    colors,
    backgroundColor,
    horizon,
    curvature,
    tilt,
    sunPosition,
    sunrise,
    spread,
    atmosphere,
    thickness,
    rim,
    flare,
    airglow,
    clouds,
    stars,
    aurora,
    autoAurora,
    speed,
    drift,
    parallax,
    bloom,
    grain,
    interactive,
    intro,
    paused,
    dpr,
    reduced: reducedMotion,
  });

  useEffect(() => {
    propsRef.current = {
      colors,
      backgroundColor,
      horizon,
      curvature,
      tilt,
      sunPosition,
      sunrise,
      spread,
      atmosphere,
      thickness,
      rim,
      flare,
      airglow,
      clouds,
      stars,
      aurora,
      autoAurora,
      speed,
      drift,
      parallax,
      bloom,
      grain,
      interactive,
      intro,
      paused,
      dpr,
      reduced: reducedMotion,
    };
    runtimeRef.current?.sync();
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvasMount = canvasMountRef.current;
    if (!container || !canvasMount) return;

    let renderer: THREE.WebGLRenderer;
    const doc = container.ownerDocument;
    const win = doc.defaultView ?? window;
    const canvas = doc.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: false,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    canvasMount.appendChild(canvas);
    renderer.autoClear = false;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    const planeGeo = new THREE.PlaneGeometry(2, 2);
    const scene = new THREE.Scene();
    const quad = new THREE.Mesh(planeGeo);
    quad.frustumCulled = false;
    scene.add(quad);

    const uniformVec3 = () => ({ value: new THREE.Vector3(1, 1, 1) });
    const auroraUniforms = Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, 0, 0));

    const planetMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uRes: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uRoll: { value: 0 },
        uApex: { value: -0.22 },
        uRadius: { value: 2.4 },
        uSunArc: { value: 0.2 },
        uSpread: { value: 0.6 },
        uSunUp: { value: 1 },
        uAtmo: { value: 1 },
        uThick: { value: 1 },
        uRimGain: { value: 1 },
        uFlare: { value: 1 },
        uAirglow: { value: 0.5 },
        uClouds: { value: 0.5 },
        uStars: { value: 0.5 },
        uAuroraGain: { value: 1 },
        uAuroras: { value: auroraUniforms },
        uInk: { value: 0 },
        uRimColor: uniformVec3(),
        uInner: uniformVec3(),
        uMid: uniformVec3(),
        uOuter: uniformVec3(),
        uGlowColor: uniformVec3(),
        uSunColor: uniformVec3(),
        uStarColor: uniformVec3(),
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: PLANET_FRAGMENT_SHADER,
      depthTest: false,
      depthWrite: false,
    });

    const createRenderTarget = () =>
      new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType,
        format: THREE.RGBAFormat,
        depthBuffer: false,
        stencilBuffer: false,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        generateMipmaps: false,
      });

    const sceneTarget = createRenderTarget();
    const bloomPyramid = Array.from({ length: 5 }, createRenderTarget);
    const bgVec = new THREE.Vector3(0.04, 0.04, 0.04);

    const downsampleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uSource: { value: null },
        uTexel: { value: new THREE.Vector2() },
        uThreshold: { value: 0 },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: DOWNSAMPLE_FRAGMENT_SHADER,
      depthTest: false,
      depthWrite: false,
    });

    const upsampleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uSource: { value: null },
        uTexel: { value: new THREE.Vector2() },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: UPSAMPLE_FRAGMENT_SHADER,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const compositeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uScene: { value: sceneTarget.texture },
        uBloom: { value: bloomPyramid[0].texture },
        uBackground: { value: bgVec },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uBloomStrength: { value: 0.5 },
        uGrain: { value: 0.25 },
        uTime: { value: 0 },
        uInk: { value: 0 },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: COMPOSITE_FRAGMENT_SHADER,
      depthTest: false,
      depthWrite: false,
    });

    let viewW = 0;
    let viewH = 0;
    let currDpr = 1;
    let hasSize = false;
    let lastColorKey = "";
    let isLightMode = false;
    let computedBg: [number, number, number] = [0.04, 0.04, 0.04];
    let lastColorCheck = -10;
    let simTime = 0;
    let realTimeSec = 0;
    let introStartTime = -1;
    let introProgress = 1;
    let currTiltRoll = 0;
    let currApexOffset = 0;
    let targetTiltRoll = 0;
    let targetApexOffset = 0;
    let nextAutoAuroraTime = 4;
    let randSeed = 11;
    let rafId = 0;
    let lastFrameTime = 0;
    let isVisible = false;
    let isDestroyed = false;
    let isContextLost = false;

    interface AuroraCurtain {
      arc: number;
      born: number;
      strength: number;
      seed: number;
      dying: number;
    }
    const auroraList: AuroraCurtain[] = [];

    const nextRandom = () => ((randSeed = (16807 * randSeed) % 0x7fffffff) - 1) / 0x7ffffffe;

    const setUniformColor = (name: string, rgb: [number, number, number]) => {
      const u = planetMaterial.uniforms[name].value as THREE.Vector3;
      if (isLightMode) {
        u.set(rgb[0], rgb[1], rgb[2]);
      } else {
        u.set(srgbToLinear(rgb[0]), srgbToLinear(rgb[1]), srgbToLinear(rgb[2]));
      }
    };

    const updateThemeColors = () => {
      const cfg = propsRef.current;
      const getInheritedBg = (): [number, number, number] => {
        let el: HTMLElement | null = container.parentElement;
        while (el) {
          const bg = win.getComputedStyle(el).backgroundColor;
          const match = bg.match(/rgba?\(([^)]+)\)/);
          if (match) {
            const parts = match[1].split(",").map((p) => parseFloat(p));
            if (parts.length < 4 || parts[3] > 0.05) {
              return [parts[0] / 255, parts[1] / 255, parts[2] / 255];
            }
          }
          el = el.parentElement;
        }
        const textCol = win.getComputedStyle(container).color;
        const textMatch = textCol.match(/rgba?\(([^)]+)\)/);
        if (textMatch) {
          const parts = textMatch[1].split(",").map((p) => parseFloat(p));
          return parts[0] + parts[1] + parts[2] > 382 ? [0.04, 0.04, 0.04] : [1, 1, 1];
        }
        return [0.04, 0.04, 0.04];
      };

      computedBg = parseColor(cfg.backgroundColor) ?? getInheritedBg();
      const colorKey = [computedBg.join(","), cfg.colors[0], cfg.colors[1]].join("|");
      if (colorKey === lastColorKey) return;
      lastColorKey = colorKey;

      isLightMode = 0.2126 * computedBg[0] + 0.7152 * computedBg[1] + 0.0722 * computedBg[2] > 0.55;
      bgVec.set(computedBg[0], computedBg[1], computedBg[2]);

      const c0 = srgbToOklab(parseColor(cfg.colors[0]) ?? [1, 0.62, 0.99]);
      const c1 = srgbToOklab(parseColor(cfg.colors[1]) ?? [0.32, 0.15, 1]);

      const oklabChromaBoost = (col: [number, number, number], targetL: number): [number, number, number] => {
        const chroma = Math.hypot(col[1], col[2]);
        if (chroma < 0.02) return [0.8 * targetL, 0, 0];
        const boost = Math.max(1, 0.15 / chroma);
        return [targetL, col[1] * boost, col[2] * boost];
      };

      const cMid = mixOklab(c0, c1, 0.55);
      const cGlow = mixOklab(c0, c1, 0.35);
      const satAdjust = (c: [number, number, number], minL: number, satMult: number): [number, number, number] => [
        Math.max(c[0], minL),
        c[1] * satMult,
        c[2] * satMult,
      ];

      if (isLightMode) {
        setUniformColor("uRimColor", oklabToSrgb(oklabChromaBoost(mixOklab(c0, c1, 0.7), 0.42)));
        setUniformColor("uInner", oklabToSrgb(oklabChromaBoost(c0, 0.62)));
        setUniformColor("uMid", oklabToSrgb(oklabChromaBoost(cMid, 0.55)));
        setUniformColor("uOuter", oklabToSrgb(oklabChromaBoost(c1, 0.5)));
        setUniformColor("uGlowColor", oklabToSrgb(oklabChromaBoost(cGlow, 0.58)));
        setUniformColor("uSunColor", oklabToSrgb(oklabChromaBoost(mixOklab(c0, c1, 0.5), 0.48)));
        setUniformColor("uStarColor", oklabToSrgb(oklabChromaBoost(c1, 0.5)));
      } else {
        setUniformColor("uRimColor", oklabToSrgb(satAdjust(c0, 0.96, 0.22)));
        setUniformColor("uInner", oklabToSrgb(c0));
        setUniformColor("uMid", oklabToSrgb(cMid));
        setUniformColor("uOuter", oklabToSrgb(c1));
        setUniformColor("uGlowColor", oklabToSrgb(satAdjust(cGlow, 0.78, 0.7)));
        setUniformColor("uSunColor", oklabToSrgb(satAdjust(c0, 0.98, 0.12)));
        setUniformColor("uStarColor", oklabToSrgb(satAdjust(c1, 0.93, 0.15)));
      }

      planetMaterial.uniforms.uInk.value = isLightMode ? 1 : 0;
      compositeMaterial.uniforms.uInk.value = isLightMode ? 1 : 0;
    };

    const handleResize = () => {
      const cfg = propsRef.current;
      const w = Math.round(container.clientWidth);
      const h = Math.round(container.clientHeight);
      if (w < 2 || h < 2) {
        hasSize = false;
        return false;
      }
      const d = Math.min(win.devicePixelRatio || 1, clamp(numOrDefault(cfg.dpr, 2), 0.5, 3));
      if (hasSize && w === viewW && h === viewH && d === currDpr) return false;

      hasSize = true;
      viewW = w;
      viewH = h;
      currDpr = d;
      renderer.setPixelRatio(currDpr);
      renderer.setSize(viewW, viewH, false);

      const renderW = Math.round(viewW * currDpr);
      const renderH = Math.round(viewH * currDpr);
      sceneTarget.setSize(renderW, renderH);

      let bw = renderW;
      let bh = renderH;
      for (const b of bloomPyramid) {
        bw = Math.max(1, Math.round(bw / 2));
        bh = Math.max(1, Math.round(bh / 2));
        b.setSize(bw, bh);
      }

      planetMaterial.uniforms.uRes.value.set(renderW, renderH);
      compositeMaterial.uniforms.uResolution.value.set(renderW, renderH);
      return true;
    };

    const calcRadius = () =>
      (2.4 / clamp(numOrDefault(propsRef.current.curvature, 1), 0.08, 6)) *
      clamp(viewW / Math.max(viewH, 1) / 1.6, 0.42, 1);
    const calcApex = () => 0.5 - clamp(numOrDefault(propsRef.current.horizon, 0.72), 0.15, 1.1);
    const calcSunArc = () => {
      const cfg = propsRef.current;
      const aspect = viewW / Math.max(viewH, 1);
      const baseArc = clamp(numOrDefault(cfg.sunPosition, 0.15), -1.2, 1.2) * aspect * 0.42;
      const rad = calcRadius();
      const driftOffset = cfg.reduced ? 0 : 0.03 * clamp(numOrDefault(cfg.drift, 0.5), 0, 2) * Math.sin(0.05 * simTime);
      return Math.asin(clamp(baseArc / rad, -0.99, 0.99)) * rad + driftOffset;
    };

    const renderFrame = () => {
      if (!hasSize) return;
      if (performance.now() - lastColorCheck > 1000) {
        lastColorCheck = performance.now();
        updateThemeColors();
      }

      const cfg = propsRef.current;
      const u = planetMaterial.uniforms;
      const tiltAngle = (clamp(numOrDefault(cfg.tilt, 0), -180, 180) * Math.PI) / 180;
      u.uTime.value = simTime;
      u.uRoll.value = tiltAngle + currTiltRoll;
      u.uApex.value = calcApex() + currApexOffset;
      u.uRadius.value = calcRadius();
      u.uSunArc.value = calcSunArc();

      const spreadCfg = 0.08 + 1.1 * clamp(numOrDefault(cfg.spread, 0.4), 0, 3);
      u.uSpread.value = 0.05 + (spreadCfg - 0.05) * (0.15 + 0.85 * introProgress);
      u.uSunUp.value = clamp(numOrDefault(cfg.sunrise, 1), 0, 1.5) * (0.12 + 0.88 * introProgress);
      u.uAtmo.value = clamp(numOrDefault(cfg.atmosphere, 1), 0, 3);
      u.uThick.value = clamp(numOrDefault(cfg.thickness, 1), 0.3, 3);
      u.uRimGain.value = clamp(numOrDefault(cfg.rim, 1), 0, 3);
      u.uFlare.value = clamp(numOrDefault(cfg.flare, 1), 0, 3);
      u.uAirglow.value = clamp(numOrDefault(cfg.airglow, 0.5), 0, 2);
      u.uClouds.value = clamp(numOrDefault(cfg.clouds, 0.5), 0, 2);
      u.uStars.value = clamp(numOrDefault(cfg.stars, 0.5), 0, 2);
      u.uAuroraGain.value = clamp(numOrDefault(cfg.aurora, 1), 0, 3);

      for (let i = 0; i < 8; i++) {
        const a = auroraList[i];
        if (a) {
          const fade = a.dying < 0 ? 1 : clamp(1 - (realTimeSec - a.dying) / 0.7, 0, 1);
          auroraUniforms[i].set(a.arc, realTimeSec - a.born, a.strength * fade * fade, a.seed);
        } else {
          auroraUniforms[i].set(0, 0, 0, 0);
        }
      }

      compositeMaterial.uniforms.uGrain.value = clamp(numOrDefault(cfg.grain, 0.25), 0, 1);
      compositeMaterial.uniforms.uTime.value = simTime;

      if (isLightMode) {
        planetMaterial.blending = THREE.MultiplyBlending;
      } else {
        planetMaterial.blending = THREE.NormalBlending;
      }

      quad.material = planetMaterial;
      renderer.setRenderTarget(sceneTarget);
      renderer.setClearColor(0, 0);
      renderer.clear();
      renderer.render(scene, camera);

      const bloomStrength = isLightMode ? 0 : clamp(numOrDefault(cfg.bloom, 0.5), 0, 3);
      if (bloomStrength > 0.001) {
        let srcTex: THREE.WebGLRenderTarget = sceneTarget;
        quad.material = downsampleMaterial;
        for (const target of bloomPyramid) {
          downsampleMaterial.uniforms.uThreshold.value = 0.45 * (srcTex === sceneTarget ? 1 : 0);
          downsampleMaterial.uniforms.uSource.value = srcTex.texture;
          downsampleMaterial.uniforms.uTexel.value.set(1 / srcTex.width, 1 / srcTex.height);
          renderer.setRenderTarget(target);
          renderer.render(scene, camera);
          srcTex = target;
        }

        quad.material = upsampleMaterial;
        for (let i = bloomPyramid.length - 1; i > 0; i--) {
          upsampleMaterial.uniforms.uSource.value = bloomPyramid[i].texture;
          upsampleMaterial.uniforms.uTexel.value.set(1 / bloomPyramid[i].width, 1 / bloomPyramid[i].height);
          renderer.setRenderTarget(bloomPyramid[i - 1]);
          renderer.render(scene, camera);
        }
      }

      compositeMaterial.uniforms.uBloomStrength.value = bloomStrength;
      quad.material = compositeMaterial;
      renderer.setRenderTarget(null);
      renderer.render(scene, camera);
    };

    const clientPointToHorizonArc = (clientX: number, clientY: number): number | null => {
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return null;
      const cfg = propsRef.current;
      const aspect = rect.width / rect.height;
      const normX = ((clientX - rect.left) / rect.width - 0.5) * aspect;
      const normY = 0.5 - (clientY - rect.top) / rect.height;
      const tiltRad = ((clamp(numOrDefault(cfg.tilt, 0), -180, 180) * Math.PI) / 180) + currTiltRoll;
      const rotX = Math.cos(tiltRad) * normX - Math.sin(tiltRad) * normY;
      const rotY = Math.sin(tiltRad) * normX + Math.cos(tiltRad) * normY;
      const rad = calcRadius();
      return Math.atan2(rotX, rotY - (calcApex() + currApexOffset - rad)) * rad;
    };

    const triggerAurora = (arc: number, strength: number) => {
      const active = auroraList.filter((a) => a.dying < 0);
      if (active.length >= 5) active[0].dying = realTimeSec;
      if (auroraList.length < 8) {
        auroraList.push({
          arc,
          born: realTimeSec,
          strength,
          seed: 40 * nextRandom(),
          dying: -1,
        });
      }
    };

    const requestNextTick = () => {
      if (isDestroyed || isContextLost || !isVisible || rafId) return;
      rafId = requestAnimationFrame(animateLoop);
    };

    const animateLoop = (timeMs: number) => {
      rafId = 0;
      if (isDestroyed || isContextLost) return;
      const cfg = propsRef.current;
      const deltaSec =
        lastFrameTime && timeMs - lastFrameTime < 100
          ? Math.min(Math.max((timeMs - lastFrameTime) / 1000, 0), 0.05)
          : 1 / 60;
      lastFrameTime = timeMs;

      const shouldAnimate = !cfg.reduced && !cfg.paused;
      if (shouldAnimate) {
        realTimeSec += deltaSec;
        simTime += deltaSec * clamp(numOrDefault(cfg.speed, 0.5), 0, 3);
      }

      if (cfg.intro && !cfg.reduced) {
        if (introStartTime < 0) introStartTime = timeMs;
        const p = clamp((timeMs - introStartTime) / 6500, 0, 1);
        introProgress = p * p * (3 - 2 * p);
      } else {
        introProgress = 1;
      }

      const lerpFactor = cfg.reduced ? 1 : 1 - Math.exp(-deltaSec / 0.55);
      currTiltRoll += (targetTiltRoll - currTiltRoll) * lerpFactor;
      currApexOffset += (targetApexOffset - currApexOffset) * lerpFactor;

      for (let i = auroraList.length - 1; i >= 0; i--) {
        const a = auroraList[i];
        if (realTimeSec - a.born > 6.7 || (a.dying >= 0 && realTimeSec - a.dying > 0.7)) {
          auroraList.splice(i, 1);
        }
      }

      if (shouldAnimate && cfg.autoAurora && clamp(numOrDefault(cfg.aurora, 1), 0, 3) > 0 && realTimeSec >= nextAutoAuroraTime) {
        const spreadVal = 0.08 + 1.1 * clamp(numOrDefault(cfg.spread, 0.4), 0, 3);
        triggerAurora(calcSunArc() + (nextRandom() - 0.5) * spreadVal * 2.4, 0.6 + 0.5 * nextRandom());
        nextAutoAuroraTime = realTimeSec + 5 + 6 * nextRandom();
      }

      renderFrame();

      const isTilting =
        Math.abs(targetTiltRoll - currTiltRoll) > 5e-5 || Math.abs(targetApexOffset - currApexOffset) > 5e-5;
      if ((shouldAnimate || isTilting || introProgress < 1) && !doc.hidden) {
        rafId = requestAnimationFrame(animateLoop);
      } else {
        lastFrameTime = 0;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      const cfg = propsRef.current;
      if (!cfg.interactive || cfg.reduced || e.pointerType === "touch") return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const p = clamp(numOrDefault(cfg.parallax, 0.5), 0, 2);
      const nx = clamp((e.clientX - rect.left) / rect.width, 0, 1) - 0.5;
      const ny = clamp((e.clientY - rect.top) / rect.height, 0, 1) - 0.5;
      targetTiltRoll = -(0.07 * nx) * p;
      targetApexOffset = -(0.05 * ny) * p;
      requestNextTick();
    };

    const onPointerLeave = () => {
      targetTiltRoll = 0;
      targetApexOffset = 0;
      requestNextTick();
    };

    let pointerDownState: { id: number; x: number; y: number; time: number } | null = null;
    const onPointerDown = (e: PointerEvent) => {
      pointerDownState = null;
      const cfg = propsRef.current;
      if (!cfg.interactive || cfg.reduced || cfg.paused || !e.isPrimary) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        typeof target.closest === "function" &&
        target.closest("a,button,input,textarea,select,label,summary,[role=button],[contenteditable=true]")
      ) {
        return;
      }
      pointerDownState = { id: e.pointerId, x: e.clientX, y: e.clientY, time: performance.now() };
    };

    const onPointerUp = (e: PointerEvent) => {
      const state = pointerDownState;
      pointerDownState = null;
      if (!state || state.id !== e.pointerId) return;
      if (Math.hypot(e.clientX - state.x, e.clientY - state.y) > 10) return;
      if (performance.now() - state.time > 500) return;
      if (clamp(numOrDefault(propsRef.current.aurora, 1), 0, 3) <= 0) return;

      const arc = clientPointToHorizonArc(e.clientX, e.clientY);
      if (arc !== null) {
        triggerAurora(arc, 1);
        requestNextTick();
      }
    };

    const onPointerCancel = () => {
      pointerDownState = null;
    };

    const onVisibilityChange = () => {
      lastFrameTime = 0;
      requestNextTick();
    };

    const onContextLost = (e: Event) => {
      e.preventDefault();
      isContextLost = true;
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onContextRestored = () => {
      isContextLost = false;
      lastColorKey = "";
      requestNextTick();
    };

    const resizeObserver = new ResizeObserver(() => {
      if (handleResize()) {
        renderFrame();
        requestNextTick();
      }
    });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        lastFrameTime = 0;
        requestNextTick();
      },
      { rootMargin: "120px" }
    );

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerCancel);
    doc.addEventListener("visibilitychange", onVisibilityChange);
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    resizeObserver.observe(container);
    intersectionObserver.observe(container);

    handleResize();
    updateThemeColors();

    const runtime = {
      sync: () => {
        lastColorCheck = -10;
        handleResize();
        lastFrameTime = 0;
        if (!rafId && isVisible) {
          renderFrame();
          requestNextTick();
        }
      },
      bloom: (x?: number, strength?: number) => {
        if (propsRef.current.reduced) return;
        const rect = container.getBoundingClientRect();
        const arc = clientPointToHorizonArc(
          rect.left + clamp(x ?? 0.5, 0, 1) * rect.width,
          rect.top + 0.5 * rect.height
        );
        if (arc !== null) {
          triggerAurora(arc, clamp(numOrDefault(strength ?? 1, 1), 0, 3));
          requestNextTick();
        }
      },
      replay: () => {
        introStartTime = -1;
        introProgress = 0;
        lastFrameTime = 0;
        requestNextTick();
      },
      destroy: () => {
        isDestroyed = true;
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        container.removeEventListener("pointermove", onPointerMove);
        container.removeEventListener("pointerleave", onPointerLeave);
        container.removeEventListener("pointerdown", onPointerDown);
        container.removeEventListener("pointerup", onPointerUp);
        container.removeEventListener("pointercancel", onPointerCancel);
        doc.removeEventListener("visibilitychange", onVisibilityChange);
        canvas.removeEventListener("webglcontextlost", onContextLost);
        canvas.removeEventListener("webglcontextrestored", onContextRestored);

        planeGeo.dispose();
        planetMaterial.dispose();
        downsampleMaterial.dispose();
        upsampleMaterial.dispose();
        compositeMaterial.dispose();
        sceneTarget.dispose();
        for (const b of bloomPyramid) b.dispose();
        renderer.dispose();
        canvas.remove();
      },
    };

    runtimeRef.current = runtime;

    return () => {
      runtime.destroy();
      runtimeRef.current = null;
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      bloom: (x?: number, strength?: number) => runtimeRef.current?.bloom(x, strength),
      replay: () => runtimeRef.current?.replay(),
    }),
    []
  );

  const bgTrim = backgroundColor.trim().toLowerCase();
  const inlineBg = bgTrim === "transparent" || bgTrim === "" ? undefined : backgroundColor;

  return (
    <div
      ref={containerRef}
      className={cn("relative isolate h-full min-h-[320px] w-full overflow-hidden", className)}
      style={{
        backgroundColor: inlineBg,
        touchAction: "pan-y",
        ...style,
      }}
    >
      <div ref={canvasMountRef} aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
      {children ? (
        <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div>
      ) : null}
    </div>
  );
});

HorizonBloom.displayName = "HorizonBloom";
export default HorizonBloom;
