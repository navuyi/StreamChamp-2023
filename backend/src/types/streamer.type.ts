import { IStreamer } from "../database/models/Streamer"

export type CreateStreamerRequestBody = Pick<IStreamer, "nickname" | "firstName" | "lastName" | "description" | "platform">

export type GetStreamersResponseBody = {
    streamers: IStreamer[] 
    lastPage: number
}