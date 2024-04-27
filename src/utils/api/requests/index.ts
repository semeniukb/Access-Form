import { api } from "@/utils/api/instance.ts";
import { CreateOtpDto, OtpResponse, RequestConfig, SignInDto, SignInResponse } from "../../../../@types/api";

type PostAuthOtpParams = CreateOtpDto;
export type PostAuthOtpRequestConfig = RequestConfig<PostAuthOtpParams>;
export const postAuthOtp = ({ params, config }: PostAuthOtpRequestConfig) =>
  api.post<OtpResponse>("auth/otp", params, config);

type PostUsersSignInParams = SignInDto;
export type PostUsersSignInRequestConfig = RequestConfig<PostUsersSignInParams>;
export const postUsersSignIn = ({ params, config }: PostUsersSignInRequestConfig) =>
  api.post<SignInResponse>("users/signin", params, config);
