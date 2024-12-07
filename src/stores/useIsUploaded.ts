import { create } from 'zustand';

interface useIsUploaded {
    isUploaded: boolean,
    setIsUploaded: (state: boolean) => void
}

export const useIsUploaded = create<useIsUploaded>((set) => ({
    isUploaded: false,
    setIsUploaded: (state) => set({ isUploaded: state }),
}))