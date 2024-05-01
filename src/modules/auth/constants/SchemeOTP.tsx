import * as z from "zod";
import { LENGTH } from "@/modules/auth/constants/sizes.ts";

export const otpScheme = z.object({
  otp: z.string().min(LENGTH.OTP, {
    message: "Поле обязательно для заполнения",
  }),
});

export type OtpScheme = z.infer<typeof otpScheme>;
