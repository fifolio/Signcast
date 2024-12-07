import { create } from 'zustand'

interface useDataFromfile {
    dataFromFile: [] | null,
    setDataFromFile: (state: []) => void;
}

export const useDataFromfile = create<useDataFromfile>((set) => ({
    dataFromFile: [],
    setDataFromFile: (state) => set({ dataFromFile: state })
}))