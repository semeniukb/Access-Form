import { useOTPForm } from "@/modules/auth/components/OTPForm/hooks/useOTPForm.tsx";
import { Button, Typography } from "@/components";
import { Input } from "@/components/Input/Input.tsx";
import { PatternFormat } from "react-number-format";
import styles from "./OTPForm.module.css";
import { Controller } from "react-hook-form";
export const OTPForm = () => {
  const { form, functions, state } = useOTPForm();

  return (
    <form className={styles.container} onSubmit={functions.onSubmit}>
      <Typography variant="paragraph16_regular" tag="p">
        Введите проверочный код для входа <br />в личный кабинет
      </Typography>

      <Controller
        name="phone"
        control={form.control}
        render={({ field: { onChange, ...restField }, fieldState }) => (
          <Input
            {...restField}
            placeholder="Телефон"
            disabled={state.isLoading}
            format="+7 ### ### ## ##"
            component={PatternFormat}
            onValueChange={({ value }) => onChange(value)}
            {...(fieldState.error && { error: fieldState.error.message })}
          />
        )}
      />

      <Button variant="contained" loading={state.isLoading} type="submit">
        Продолжить
      </Button>
    </form>
  );
};
