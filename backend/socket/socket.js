import { Server } from "socket.io";
import http from "http";
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; //{userId: socketid}

io.on("connection", (socket) => {
    console.log("User connected, ",socket.id);
    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id

    //send events to all connected clients
    io.emit("getOnlindeUsers", Object.keys(userSocketMap))

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlindeUsers", Object.keys(userSocketMap))
    })
})

export {app, io, server}