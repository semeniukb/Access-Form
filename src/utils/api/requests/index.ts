import { api } from "@/utils/api/instance.ts";
import {
  CreateOtpDto,
  OtpResponse,
  RequestConfig,
  SessionResponse,
  SignInDto,
  SignInResponse,
} from "../../../../@types/api";

type PostAuthOtpParams = CreateOtpDto;
export type PostAuthOtpRequestConfig = RequestConfig<PostAuthOtpParams>;
export const postAuthOtp = ({ params, config }: PostAuthOtpRequestConfig) =>
  api.post<OtpResponse>("auth/otp", params, config);

type PostUsersSignInParams = SignInDto;
export type PostUsersSignInRequestConfig = RequestConfig<PostUsersSignInParams>;
export const postUsersSignIn = ({ params, config }: PostUsersSignInRequestConfig) =>
  api.post<SignInResponse>("users/signin", params, config);

export type GetUserSessionRequestConfig = RequestConfig | void;
export const getUserSession = (requestConfig: GetUserSessionRequestConfig) =>
  api.get<SessionResponse>("users/session", requestConfig?.config);
