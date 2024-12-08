import { create } from 'zustand'

interface useDataFromfile {
    Data_from_Screen_MFR: [],
    Data_from_Media_Player_MFR: [],
    Data_from_Mounts: [], 
    Data_from_Receptacle_Box: [],
    setData_from_Screen_MFR: (state: []) => void,
    setData_from_Media_Player_MFR: (state: []) => void,
    setData_from_Mounts: (state: []) => void,
    setData_from_Receptacle_Box: (state: []) => void,

}

export const useDataFromfile = create<useDataFromfile>((set) => ({
    Data_from_Screen_MFR: [],
    Data_from_Media_Player_MFR: [],
    Data_from_Mounts: [], 
    Data_from_Receptacle_Box: [],
    setData_from_Screen_MFR: (state) => set({ Data_from_Screen_MFR: state }),
    setData_from_Media_Player_MFR: (state) => set({ Data_from_Media_Player_MFR: state }),
    setData_from_Mounts: (state) => set({ Data_from_Mounts: state }),
    setData_from_Receptacle_Box: (state) => set({ Data_from_Receptacle_Box: state })
}))