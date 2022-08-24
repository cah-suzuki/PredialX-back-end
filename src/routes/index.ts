import { Express } from "express";

import { clientRouter } from "./client.routes";
import { cooperatorRouter } from "./cooperator.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", clientRouter());
  app.use("/cooperator", cooperatorRouter());
};
