import { AppDataSource } from "../../data-source";
import { ICooperatorUpdate } from "../../interfaces/cooperator";
import { Cooperator } from "../../entities/cooperator.entity";
import { AppError } from "../../errors/AppError";

export default class UpdateCooperatorService {
  static execute = async ({
    name,
    email,
    password,
    cooperator_id,
  }: ICooperatorUpdate) => {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperators = await cooperatorRepository.find();
    const cooperator = cooperators.find((item) => item.id == cooperator_id);

    if (!name && !email && !password) {
      throw new AppError(409, "Fields name,email or password are required");
    }

    if (!cooperator) {
      throw new AppError(404, "Not Found any cooperator with this id");
    }

    name ? (cooperator.name = name) : cooperator.name;
    email ? (cooperator.email = email) : cooperator.email;
    password ? (cooperator.password = password) : cooperator.password;

    return cooperatorRepository.save(cooperator);
  };
}
