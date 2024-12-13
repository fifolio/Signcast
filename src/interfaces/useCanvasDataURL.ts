import { create } from 'zustand';
import { useCanvasDataURL_interface } from '@/interfaces/useCanvasDataURL_interface';

export const useCanvasDataURL = create<useCanvasDataURL_interface>((set) => ({
    canvasDataURL: '',
    setCanvasDataURL: (state) => set({ canvasDataURL: state })
}))