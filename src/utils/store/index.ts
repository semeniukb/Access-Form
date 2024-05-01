import { create } from "zustand";
import { User } from "../../../@types/api";

interface SessionStore {
  user: User;
  isLoggedIn: boolean;
}
export const useSessionStore = create<SessionStore>(() => ({
  user: {} as User,
  isLoggedIn: false,
}));
