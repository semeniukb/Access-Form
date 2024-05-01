import { AuthView } from "@/modules/auth/view.tsx";
import { useSessionStore } from "@/utils/store";
import { ProfileView } from "@/modules/profile/view.tsx";

export function App() {
  const isLoggedIn = useSessionStore(state => state.isLoggedIn);

  return (
    <main className="container">
      {!isLoggedIn && <AuthView />}
      {isLoggedIn && <ProfileView />}
    </main>
  );
}
