import { createServer } from "http";
import express from "express";
import createBareServer from "@tomphttp/bare-server-node";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const server = createServer();
const bare = createBareServer('/bare/');
app.use(express.static("public"));
server.on("request", (req, res) => {
    if(bare.shouldRoute(req)) {
        bare.routeRequest(req, res);

    } else {
        app(req, res);
    }
});
server.on("upgrade", (req, socket, head) => {
    if(bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen({
    port: process.env.PORT || 3000,
});




