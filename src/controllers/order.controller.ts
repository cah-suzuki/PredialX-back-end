import { Request, Response } from "express";

import CreateOrderService from "../services/order/createOrder.service";
import IndexOrderService from "../services/order/indexOrder.service";
import listOrderService from "../services/order/listOrder.service";

export default class OrderController {
  static store = async (request: Request, response: Response) => {
    try {
      const { id, date, issue_report, client_id, cooperator_id } = request.body;
      const order = await CreateOrderService.execute({
        id,
        date,
        issue_report,
        client_id,
        cooperator_id,
      });
      return response.status(201).json(order);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static list = async (request: Request, response: Response) => {
    try {
      const orders = await listOrderService.execute();
      return response.send(orders);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static index = async (request: Request, response: Response) => {
    try {
      const { order_id } = request.params;
      const orders = await IndexOrderService.execute({
        order_id,
      });
      return response.send(orders);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };
}
