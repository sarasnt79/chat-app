// src/socket.js
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // آدرس سرور Node.js

export default socket;
