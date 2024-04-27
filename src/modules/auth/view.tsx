import { Typography, Input, Button } from "@/components";
import { useView } from "@/modules/auth/hooks/useView.tsx";
import styles from "./view.module.css";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { LENGTH } from "@/modules/auth/constants/sizes.ts";

export const AuthView = () => {
  const { state, functions, form } = useView();

  return (
    <form className={styles.container} onSubmit={functions.onSubmit}>
      <Typography tag="p" variant="paragraph16_regular">
        Введите {state.stage === "phone" ? "номер телефона" : "проверочный код"} для входа
        <br /> в личный кабинет
      </Typography>
      <Controller
        name="phone"
        control={form.control}
        render={({ field: { onChange, ...restField }, fieldState }) => (
          <Input
            {...restField}
            disabled={state.isLoading}
            placeholder="Телефон"
            format="+7 (###) #### ###"
            component={PatternFormat}
            onValueChange={({ value }) => onChange(value)}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />

      {state.stage === "otp" && (
        <Input
          maxLength={LENGTH.OTP}
          placeholder="Проверочный код"
          {...form.register("otp")}
          {...("otp" in form.formState.errors &&
            form.formState.errors.otp && { error: form.formState.errors.otp.message })}
        />
      )}

      <Button variant="contained" type="submit" loading={state.isLoading}>
        Войти
      </Button>
    </form>
  );
};
