import { create } from "zustand";

interface Store {
  isOtpSend: boolean;
  retryDelay: number;
  setIsOtpSend: (isOtpSend: boolean) => void;
  setRetryDelay: (retryDelay: number) => void;
}
export const useStore = create<Store>(set => ({
  isOtpSend: false,
  retryDelay: 0,
  setIsOtpSend: isOtpSend => set({ isOtpSend }),
  setRetryDelay: retryDelay => set({ retryDelay }),
}));
