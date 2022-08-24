import { AppDataSource } from "../../data-source";
import { Cooperator } from "../../entities/cooperator.entity";

export default class ListCooperatorService {
  static execute = async () => {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperators = await cooperatorRepository.find();
    return cooperators;
  };
}
