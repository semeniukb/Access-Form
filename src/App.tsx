import { AuthView } from "@/modules/auth/view.tsx";
import { useSessionStore } from "@/utils/store";

export function App() {
  const isLoggedIn = useSessionStore(state => state.isLoggedIn);
  const user = useSessionStore(state => state.user);

  return (
    <>
      {!isLoggedIn && <AuthView />}
      {isLoggedIn && <p>{user.phone}</p>}
    </>
  );
}
