import { create } from 'zustand';

interface useIsUploadingLoading {
    isUploadingLoading: boolean,
    setIsUploadingLoading: (state: boolean) => void
}

export const useIsUploadingLoading = create<useIsUploadingLoading>((set) => ({
    isUploadingLoading: false,
    setIsUploadingLoading: (state) => set({ isUploadingLoading: state }) }
));