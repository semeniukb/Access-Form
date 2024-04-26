import { api } from "@/utils/api/instance.ts";
import { CreateOtpDto, OtpResponse, RequestConfig } from "../../../../@types/api";

type PostAuthOtpParams = CreateOtpDto;
export type PostAuthOtpRequestConfig = RequestConfig<PostAuthOtpParams>;
export const postAuthOtp = ({ params, config }: PostAuthOtpRequestConfig) =>
  api.post<OtpResponse>("auth/otp", params, config);
