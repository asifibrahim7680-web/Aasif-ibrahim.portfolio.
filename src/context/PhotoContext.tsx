import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultPhoto from '../assets/images/aasif_real_photo_1787935827224.jpg';

interface PhotoContextType {
  photoUrl: string;
  updatePhoto: (newPhotoUrl: string) => void;
  resetToDefault: () => void;
  isCustomPhoto: boolean;
  openUploadModal: () => void;
  closeUploadModal: () => void;
  isUploadModalOpen: boolean;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'aasif_portfolio_custom_photo_v1';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image/')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return defaultPhoto;
  });

  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return Boolean(saved && saved.startsWith('data:image/'));
    } catch {
      return false;
    }
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const updatePhoto = (newPhotoUrl: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, newPhotoUrl);
      setPhotoUrl(newPhotoUrl);
      setIsCustomPhoto(true);
    } catch (e) {
      console.error('Failed to save photo to localStorage', e);
      setPhotoUrl(newPhotoUrl);
      setIsCustomPhoto(true);
    }
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setPhotoUrl(defaultPhoto);
    setIsCustomPhoto(false);
  };

  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        updatePhoto,
        resetToDefault,
        isCustomPhoto,
        openUploadModal,
        closeUploadModal,
        isUploadModalOpen
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};
