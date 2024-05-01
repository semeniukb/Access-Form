import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./styles/global.css";
import "./styles/reset.css";
import { Provider } from "./provider.tsx";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";
import { getUserSession } from "@/utils/api";
import { useSessionStore } from "@/utils/store";

(async function init() {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);

  if (token) {
    const getUserSessionResponse = await getUserSession();
    useSessionStore.setState({ isLoggedIn: true, user: getUserSessionResponse.data.user });
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider>
      <App />
    </Provider>,
  );
})();
