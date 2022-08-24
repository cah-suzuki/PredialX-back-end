import { Router } from "express";
import CooperatorController from "../controllers/cooperator.controller";
const router = Router();

export const cooperatorRouter = () => {
  router.post("", CooperatorController.store);
  router.post("/login", CooperatorController.login);
  router.get("", CooperatorController.list);
  router.get("/:cooperator_id", CooperatorController.index);
  router.patch("/:cooperator_id", CooperatorController.update);
  router.delete("/:cooperator_id", CooperatorController.delete);
  return router;
};
