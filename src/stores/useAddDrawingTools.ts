// src/stores/useDrawingToolStore.ts
import { create } from 'zustand';

export const useDrawingToolStore = create((set) => ({
    selectedTool: null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setSelectedTool: (tool: any) => set({ selectedTool: tool }),
}));
