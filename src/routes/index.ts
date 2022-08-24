import { Express } from "express";

import { clientRouter } from "./client.routes";
import { cooperatorRouter } from "./cooperator.routes";
import { orderRouter } from "./order.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", clientRouter());
  app.use("/cooperator", cooperatorRouter());
  app.use("/order", orderRouter());
};
