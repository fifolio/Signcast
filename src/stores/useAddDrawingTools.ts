import { create } from 'zustand';
import { useDrawingToolState_interface } from '@/interfaces/useDrawingToolState_interface';

// Create the store with the defined state type
export const useDrawingToolStore = create<useDrawingToolState_interface>((set) => ({
  selectedTool: null,
  setSelectedTool: (tool) => set({ selectedTool: tool }),
}));
