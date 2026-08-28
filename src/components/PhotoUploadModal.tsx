import React, { useState, useRef, ChangeEvent } from 'react';
import { X, Upload, Check, RotateCcw, Image, Sparkles, ZoomIn, ZoomOut, AlertCircle, Camera } from 'lucide-react';
import { usePhoto } from '../context/PhotoContext';

export const PhotoUploadModal: React.FC = () => {
  const { isUploadModalOpen, closeUploadModal, updatePhoto, resetToDefault, isCustomPhoto, photoUrl } = usePhoto();
  
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [cropOffset, setCropOffset] = useState({ x: 0, y: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isUploadModalOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const processImageFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPEG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      setSelectedFile(dataUrl);
      setZoom(1);
      setCropOffset({ x: 0, y: 0 });
    };
    reader.readAsDataURL(file);
  };

  const handleApplyPhoto = () => {
    if (!selectedFile) return;
    setIsProcessing(true);

    // Create a square canvas to render cropped image
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const targetSize = 600;
      canvas.width = targetSize;
      canvas.height = targetSize;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetSize, targetSize);

        const imgAspect = img.width / img.height;
        let drawWidth: number;
        let drawHeight: number;

        if (imgAspect > 1) {
          // landscape
          drawHeight = targetSize * zoom;
          drawWidth = drawHeight * imgAspect;
        } else {
          // portrait
          drawWidth = targetSize * zoom;
          drawHeight = drawWidth / imgAspect;
        }

        const drawX = (targetSize - drawWidth) / 2 + cropOffset.x;
        const drawY = (targetSize - drawHeight) / 2 + cropOffset.y;

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        const finalDataUrl = canvas.toDataURL('image/jpeg', 0.92);
        
        updatePhoto(finalDataUrl);
        setIsProcessing(false);
        setSuccessToast(true);
        setTimeout(() => {
          setSuccessToast(false);
          closeUploadModal();
        }, 800);
      }
    };
    img.src = selectedFile;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-white">Upload Your Real Photo</h3>
              <p className="text-xs text-slate-400 font-['JetBrains_Mono']">Add your authentic photograph</p>
            </div>
          </div>
          <button
            onClick={closeUploadModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {successToast && (
            <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs font-['JetBrains_Mono'] flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Photo updated successfully across entire portfolio!</span>
            </div>
          )}

          {/* Upload Drop Zone */}
          {!selectedFile ? (
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                dragOver
                  ? 'border-indigo-500 bg-indigo-500/10'
                  : 'border-slate-700 hover:border-indigo-500/60 bg-slate-950/40 hover:bg-slate-950/70'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-16 h-16 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 shadow-inner">
                <Upload className="w-8 h-8 animate-bounce" />
              </div>
              <h4 className="font-['Outfit'] font-bold text-base text-white">
                Click to browse or drop your photo here
              </h4>
              <p className="text-xs text-slate-400 font-['JetBrains_Mono'] mt-1 max-w-xs">
                Upload your real passport/headshot photo (JPEG, PNG, WEBP).
              </p>
              <div className="mt-4 px-3.5 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-['JetBrains_Mono'] border border-slate-700">
                Supports WhatsApp & gallery images
              </div>
            </div>
          ) : (
            /* Image Preview & Crop Controls */
            <div className="space-y-4">
              <div className="relative w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedFile}
                  alt="Preview"
                  style={{
                    transform: `scale(${zoom}) translate(${cropOffset.x}px, ${cropOffset.y}px)`
                  }}
                  className="w-full h-full object-cover transition-transform duration-75"
                />
                <div className="absolute inset-0 rounded-full border-2 border-white/20 pointer-events-none" />
              </div>

              {/* Controls */}
              <div className="space-y-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-indigo-400" />
                    Zoom & Frame
                  </span>
                  <span>{Math.round(zoom * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="2.5"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="text-xs font-['JetBrains_Mono'] text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Choose different file
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setZoom(1);
                      setCropOffset({ x: 0, y: 0 });
                    }}
                    className="text-xs font-['JetBrains_Mono'] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset Zoom
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Current Status */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-['JetBrains_Mono']">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700">
                <img src={photoUrl} alt="Current" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold">Active Photo</p>
                <p className="text-slate-400 text-[10px]">
                  {isCustomPhoto ? 'Custom photo uploaded' : 'Default passport photo'}
                </p>
              </div>
            </div>
            {isCustomPhoto && (
              <button
                type="button"
                onClick={resetToDefault}
                className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] cursor-pointer"
              >
                Reset Default
              </button>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={closeUploadModal}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-['Outfit'] font-semibold transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <div className="flex items-center gap-2">
            {selectedFile && (
              <button
                type="button"
                onClick={handleApplyPhoto}
                disabled={isProcessing}
                className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-['Outfit'] font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Check className="w-4 h-4" />
                <span>{isProcessing ? 'Saving...' : 'Apply Real Photo'}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
