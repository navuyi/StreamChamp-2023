import * as io from "socket.io"
import * as http from "http"

let socket : io.Server
export const initSocket = (httpServer:http.Server) => {
    socket = new io.Server(httpServer, {
        cors: {
            origin: ["http://localhost:5173", "http://localhost:8000"]
        }
    })
    return socket
}

export const getSocket = () => {
    if(!socket){
        throw new Error("Socket.io not initialized")
    }
    return socket
}
