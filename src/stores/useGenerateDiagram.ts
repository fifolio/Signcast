import { create } from 'zustand';
import { useGenerateDiagram_interface } from '@/interfaces/useGenerateDiagram_interface';

export const useGenerateDiagram = create<useGenerateDiagram_interface>((set) => ({
    generateDiagram: false,
    setGenerateDiagram: (state) => set({ generateDiagram: state })
}))