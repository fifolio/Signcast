import { create } from 'zustand';

interface useIsUploadingLoading {
    isUploadingLoading: boolean,
    setIsUploadingLoading: (state: boolean) => void
}

export const useIsUploadingLoading = create<useIsUploadingLoading>((set) => ({
    isUploadingLoading: true,
    setIsUploadingLoading: (state) => set({ isUploadingLoading: state }) }
));