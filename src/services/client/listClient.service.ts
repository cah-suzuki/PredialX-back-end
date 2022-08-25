import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

export default class listClientService {
  static execute = async () => {
    const clientRepository = AppDataSource.getRepository(Client);
    const clients = await clientRepository.find();
    return clients;
  };
}
