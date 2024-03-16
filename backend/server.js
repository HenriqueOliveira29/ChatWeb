import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import conversationRoutes from "./routes/conversation.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse incoming request with JSON request
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/conversation", conversationRoutes)

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running in port ${PORT}`);

});