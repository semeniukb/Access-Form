import * as z from "zod";

export const phoneScheme = z.object({
  phone: z.string().min(10, {
    message: "Поле обязательно для заполнения",
  }),
});

export type PhoneScheme = z.infer<typeof phoneScheme>;
