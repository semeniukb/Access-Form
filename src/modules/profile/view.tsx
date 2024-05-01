import { Typography, Input, Button } from "@/components";
import styles from "./view.module.css";
import { useView } from "@/modules/profile/hooks/useView.tsx";
import { PatternFormat } from "react-number-format";

export const ProfileView = () => {
  const { state, functions, form } = useView();

  return (
    <form className={styles.container} onSubmit={functions.onSubmit}>
      <Typography tag="h2" variant="title">
        Профиль
      </Typography>
      <fieldset className={styles.fieldset}>
        <Input
          label="Фамилия"
          placeholder="Фамилия"
          {...form.register("lastname")}
          {...(form.formState.errors.lastname && { error: form.formState.errors.lastname.message })}
        />
        <Input
          label="Имя"
          placeholder="Имя"
          {...form.register("firstname")}
          {...(form.formState.errors.firstname && { error: form.formState.errors.firstname.message })}
        />
        <Input
          label="Отчество"
          placeholder="Отчество"
          {...form.register("middlename")}
          {...(form.formState.errors.middlename && { error: form.formState.errors.middlename.message })}
        />
        <Input
          disabled
          label="Номер телефона"
          format="+7 (###) #### ###"
          component={PatternFormat}
          value={state.phone}
        />
        <Input
          label="Email"
          placeholder="Email"
          {...form.register("email")}
          {...(form.formState.errors.email && { error: form.formState.errors.email.message })}
        />
        <Input
          label="Город"
          placeholder="City"
          {...form.register("city")}
          {...(form.formState.errors.city && { error: form.formState.errors.city.message })}
        />
      </fieldset>

      <div className={styles.buttons_box}>
        <Button type="submit" variant="contained" loading={state.isLoading} disabled={!form.formState.isDirty}>
          Обновить данные
        </Button>
        <Button variant="contained" onClick={functions.onReset}>
          Выйти
        </Button>
      </div>
    </form>
  );
};
