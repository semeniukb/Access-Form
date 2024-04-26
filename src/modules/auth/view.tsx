import { Typography } from "@/components";
import style from "./view.module.css";
import { OTPForm } from "@/modules/auth/components";
import { useStore } from "@/utils/store";

export const AuthView = () => {
  const isOtpSend = useStore(state => state.isOtpSend);

  return (
    <div className={style.container}>
      <Typography tag="h1" variant="title">
        Вход
      </Typography>
      {!isOtpSend && <OTPForm />}
    </div>
  );
};
