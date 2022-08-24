import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";

export default class listOrderService {
  static execute = async () => {
    const orderRepository = AppDataSource.getRepository(Order);
    const orders = await orderRepository.find();
    return orders;
  };
}
