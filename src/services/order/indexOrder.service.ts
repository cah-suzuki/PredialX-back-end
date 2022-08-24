import { AppDataSource } from "../../data-source";
import { IOrderId } from "../../interfaces/order";
import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";

export default class IndexOrderService {
  static execute = async ({ order_id }: IOrderId) => {
    const orderRepository = AppDataSource.getRepository(Order);
    const allOrders = await orderRepository.find();
    const order = allOrders.find((item) => item.id == order_id);

    if (!order) {
      throw new AppError(404, "Order not found");
    }
    return order;
  };
}
