import { IStreamer } from "../database/models/Streamer"

export type CreateStreamerRequestBody = Pick<IStreamer, "nickname" | "firstName" | "lastName" | "description"> & {platform: string[]}
export type StreamingPlatform = "Twitch" | "Kick" | "Rumble" | "TikTok" | "YouTube"
export const AvailableStreamingPlatforms : StreamingPlatform[] = ["Kick", "Rumble", "TikTok", "Twitch", "YouTube"]
export type GetStreamersResponseBody = {
    streamers: IStreamer[] 
    lastPage: number
}

export type GetStreamersSortParameter = "upvotes" | "downvotes" | "created" | null