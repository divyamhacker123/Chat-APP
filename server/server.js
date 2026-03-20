// cors -> for connecting backend to any frontend url
// cloudinary -> for storing the chat images to the cloud
// bcryptjs -> for encrypting the password
// token is used for verifying the user by your secret key
import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { connectDB } from "./lib/db.js";
// import { prototype } from "events";

// create express app and HTTP Server
const app = express();

// because socket.io use http server
const server = http.createServer(app);

// Middleware Setup
// request can be parse into json format 
// so images cannot exceed 4 mb 
app.use(express.json({limit: "4mb"}));
app.use(cors());
app.use("/api/status", (req, res)=> {
    res.send("Server is live")
})

await connectDB();
// if the port number is available in the environment variable 
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>{
     console.log("Server is running on Port : ", PORT);
})


