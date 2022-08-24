import "reflect-metadata";
import express from "express";

import { appRoutes } from "./routes";

const app = express();
app.use(express.json());

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
