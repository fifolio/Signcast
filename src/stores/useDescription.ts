import { create } from 'zustand';
import { useDescription_interface } from '@/interfaces/useDescription_interface';

export const useDescription = create<useDescription_interface>((set) => ({
    description: [],
    setDescription: (state) => set({ description: state }),
}));
