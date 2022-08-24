import { AppDataSource } from "../../data-source";
import { IClientUpdate } from "../../interfaces/client";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";

export default class UpdateClientService {
  static execute = async ({ name, client_id }: IClientUpdate) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const clients = await clientRepository.find();
    const client = clients.find((item) => item.id == client_id);

    if (!name) {
      throw new AppError(409, "Field name are required");
    }

    if (!client) {
      throw new AppError(404, "Not Found any client with this id");
    }

    name ? (client.name = name) : client.name;

    console.log(client);

    return clientRepository.save(client);
  };
}
