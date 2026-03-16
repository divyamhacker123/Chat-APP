// cors -> for connecting backend to any frontend url
// cloudinary -> for storing the chat images to the cloud
// bcryptjs -> for encrypting the password
import express from "express"
import "dotenv/config"
import cors from "cors"
import http from "http"

// create express app and HTTP Server
const app = express();

// because socket.io use http server
const server = http.createServer();


