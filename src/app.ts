import "reflect-metadata";
import express from "express";

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

import { appRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

appRoutes(app);

app.get("/", (request, response) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "Ok, running",
    timestamp: Date.now(),
  };
  response.send(healthcheck);
});

export default app;
