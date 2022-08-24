import { Router } from "express";
import OrderController from "../controllers/order.controller";
const router = Router();

export const orderRouter = () => {
  router.post("", OrderController.store);
  router.get("", OrderController.list);
  router.get("/:order_id", OrderController.index);
  return router;
};
