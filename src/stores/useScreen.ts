import { create } from 'zustand';
import { useScreen_interface } from '@/interfaces/useScreen_interface';

export const useScreen = create<useScreen_interface>((set) => ({
    screen: {
        height: 'N/A',
        width: 'N/A',
        'floor line': 'N/A',
    },
    setScreen: (key, value) => set((state) => ({
        screen: {
            ...state.screen,
            [key]: value
        }
    }))
})
);