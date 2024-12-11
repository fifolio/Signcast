import { create } from 'zustand';
import { useIsDownload_interface } from '@/interfaces/useIsDownload_interface';

export const useIsDownload = create<useIsDownload_interface>((set) => ({
    isDownload: false,
    setIsDownload: (state) => set({ isDownload: state }),
}));
