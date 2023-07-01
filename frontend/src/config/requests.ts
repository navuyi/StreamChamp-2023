export const SERVER_BASE = "http://localhost:8080"

export const endpoints = {
    signin: `${SERVER_BASE}/auth/signin`,
    signup: `${SERVER_BASE}/auth/signup`,
    streamer: {
        post: `${SERVER_BASE}/streamers/`,
        getMultiple: (page:number) => `${SERVER_BASE}/streamers/page/${page}`,
        getSingle: (id:number) => `${SERVER_BASE}/streamers/${id}`,
        getRecent: `${SERVER_BASE}/streamers/recent`
    }
    //...more
}