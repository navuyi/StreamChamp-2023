import { IUser } from "../database/models/User"

export type SignInRequestBody = Pick<IUser, "email" | "password">

export type SignUpRequestBody = Pick<IUser, "email"|"password"|"firstName"|"lastName"> & {passwordRepeat: string}
