require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const data = require("");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Backend is responding");
});

server.get("/token", (req, res) => {
  const payload = {
    subject: "happyuser",
    userid: "jackieO",
    favoriteGame: "basketball"
  };

  const secret = "didyouknowthatiknowthisstuff";
  const options = {
    expiresIn: "1h"
  };

  const token = jwt.sign(payload, secret, options);

  res.json(token);
});

module.exports = server;
