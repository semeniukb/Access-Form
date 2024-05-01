import * as z from "zod";

export const profileScheme = z.object({
  firstname: z.string().min(1, { message: "Поле обязательно для заполнения" }),
  middlename: z.string().min(1, { message: "Поле обязательно для заполнения" }),
  lastname: z.string().min(1, { message: "Поле обязательно для заполнения" }),
  email: z.string().email({ message: "Некорректный email" }),
  city: z.string().min(1, { message: "Поле обязательно для заполнения" }),
});

export type ProfileScheme = z.infer<typeof profileScheme>;
