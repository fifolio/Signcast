import { create } from 'zustand';
import { useNotes_interface } from '@/interfaces/useNotes_interface';

export const useNotes = create<useNotes_interface>((set) => ({
    notes: 'Installation notes have not been provided for this setup.',
    setNotes: (state) => set({ notes: state })
}));