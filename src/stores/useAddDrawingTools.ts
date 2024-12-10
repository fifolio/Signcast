// src/stores/useDrawingToolStore.ts
import { create } from 'zustand';
import { DrawingTools_interface } from '@/interfaces/useDrawingTools_interface';

export const useDrawingToolStore = create<DrawingTools_interface>((set) => ({
    selectedTool: null,
    setSelectedTool: (tool) => set({ selectedTool: tool }),
}));
