import { AppDataSource } from "../../data-source";
import { Cooperator } from "../../entities/cooperator.entity";

export default class listCooperatorService {
  static execute = async () => {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperators = await cooperatorRepository.find();
    return cooperators;
  };
}
