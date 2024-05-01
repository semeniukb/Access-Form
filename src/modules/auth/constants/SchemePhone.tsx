import * as z from "zod";
import { LENGTH } from "@/modules/auth/constants/sizes.ts";

export const phoneScheme = z.object({
  phone: z.string().min(LENGTH.PHONE, {
    message: "Поле обязательно для заполнения",
  }),
});

export type PhoneScheme = z.infer<typeof phoneScheme>;
