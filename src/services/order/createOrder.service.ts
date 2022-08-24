import { IOrder } from "../../interfaces/order";
import { AppDataSource } from "../../data-source";
import { Order } from "../../entities/order.entity";
import { AppError } from "../../errors/AppError";
import { Client } from "../../entities/client.entity";
import { Cooperator } from "../../entities/cooperator.entity";

export default class CreateOrderService {
  static execute = async ({
    id,
    date,
    issue_report,
    client_id,
    cooperator_id,
  }: IOrder) => {
    const orderRepository = AppDataSource.getRepository(Order);
    const clientRepository = AppDataSource.getRepository(Client);
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);

    const orderAlreadyExists = await orderRepository.findOne({
      where: { id },
    });

    const clientAlreadyExists = await clientRepository.findOne({
      where: { id: client_id },
    });

    const cooperatorAlreadyExists = await cooperatorRepository.findOne({
      where: { id: cooperator_id },
    });

    if (!id && !date && !issue_report && !client_id && !cooperator_id) {
      throw new AppError(
        409,
        "Fields id, date, issue_report, client_id and cooperator_id are required"
      );
    }

    if (orderAlreadyExists) {
      throw new AppError(409, "This order id already exists in your database");
    }

    if (!clientAlreadyExists || !cooperatorAlreadyExists) {
      throw new AppError(
        409,
        "Both client and cooperator must have valid id`s"
      );
    }

    const order = new Order();
    order.id = id;
    order.date = date;
    order.issue_report = issue_report;
    order.client = clientAlreadyExists;
    order.cooperator = cooperatorAlreadyExists;

    await orderRepository.save(order);

    return order;
  };
}
