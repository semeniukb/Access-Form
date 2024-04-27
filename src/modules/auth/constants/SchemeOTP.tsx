import * as z from "zod";

export const otpScheme = z.object({
  otp: z.string().min(6, {
    message: "Поле обязательно для заполнения",
  }),
});

export type OtpScheme = z.infer<typeof otpScheme>;
