import { create } from 'zustand';
import { useConfiguration_interface } from '@/interfaces/useConfiguration_interface';

export const useConfigurations = create<useConfiguration_interface>((set) => ({
    configurations: [],
    setConfigurations: (state) => set({ configurations: state }),
}));
