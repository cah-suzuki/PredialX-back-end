import { AppDataSource } from "../../data-source";
import { IClientId } from "../../interfaces/client";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";

export default class IndexClientService {
  static execute = async ({ client_id }: IClientId) => {
    const clientRepository = AppDataSource.getRepository(Client);
    const allClients = await clientRepository.find();
    const client = allClients.find((item) => item.id == client_id);

    if (!client) {
      throw new AppError(404, "Client not found");
    }
    return client;
  };
}
