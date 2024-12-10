import { create } from 'zustand';
import { useLayoutParameters_interface } from '@/interfaces/useLayoutParameters_interface';

export const useLayoutParameters = create<useLayoutParameters_interface>((set) => ({
  layoutParameters: {
    orientation: 'horizontal',
    placement: 'Flat Wall',
    floorDistance: 100,
    nicheDepthVar: 20,
  },
  setLayoutParameters: (state) =>
    set((current) => ({
      layoutParameters: { ...current.layoutParameters, ...state }, // Merge updates
    })),
}));
