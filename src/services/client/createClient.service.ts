import { IClient } from "../../interfaces/client";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";

export default class CreateClientService {
  static execute = async ({ id, name }: IClient) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const clientAlreadyExists = await clientRepository.findOne({
      where: { id },
    });

    if (!id && !name) {
      throw new AppError(409, "Fields id and name are required");
    }
    if (clientAlreadyExists) {
      throw new AppError(409, "This client id already exists in your database");
    }

    const client = new Client();
    client.id = id;
    client.name = name;

    await clientRepository.save(client);

    return client;
  };
}
