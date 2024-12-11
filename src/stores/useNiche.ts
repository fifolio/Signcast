import { create } from 'zustand';
import { useNiche_interface } from '@/interfaces/useNiche_interface';

export const useNiche = create<useNiche_interface>((set) => ({
    niche: {
        height: 'N/A',
        width: 'N/A',
        depth: 'N/A',
    },
    setNiche: (key, value) => set((state) => ({
        niche: {
            ...state.niche,
            [key]: value
        }
    }))
})
);