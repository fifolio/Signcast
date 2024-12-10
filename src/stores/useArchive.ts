import { create } from 'zustand';

interface useArchive {
    archive: [],
    setArchive: (state: []) => void
}

export const useArchive = create<useArchive>((set) => ({
    archive: [],
    setArchive: (state) => set({ archive: state })
}))