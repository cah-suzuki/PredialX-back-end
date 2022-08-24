import { Express } from "express";

import { clientRouter } from "./client.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", clientRouter());
};
