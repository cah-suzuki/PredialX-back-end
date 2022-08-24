import { AppDataSource } from "../../data-source";
import { ICooperatorId } from "../../interfaces/cooperator";
import { Cooperator } from "../../entities/cooperator.entity";
import { AppError } from "../../errors/AppError";

export default class IndexCooperatorService {
  static execute = async ({ cooperator_id }: ICooperatorId) => {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const allCooperators = await cooperatorRepository.find();
    const cooperator = allCooperators.find((item) => item.id == cooperator_id);

    if (!cooperator) {
      throw new AppError(404, "Client not found");
    }
    return cooperator;
  };
}
