import { Router } from "express";
import ClientController from "../controllers/client.controller";
const router = Router();

export const clientRouter = () => {
  router.post("", ClientController.store);
  router.get("", ClientController.list);
  router.get("/:client_id", ClientController.index);
  router.patch("/:client_id", ClientController.update);
  router.delete("/:client_id", ClientController.delete);
  return router;
};
