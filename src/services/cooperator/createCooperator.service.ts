import { ICooperator } from "../../interfaces/cooperator";
import { AppDataSource } from "../../data-source";
import { Cooperator } from "../../entities/cooperator.entity";
import { AppError } from "../../errors/AppError";

export default class CreateClientService {
  static execute = async ({ id, name, email, password }: ICooperator) => {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperatorAlreadyExists = await cooperatorRepository.findOne({
      where: { id },
    });

    if (!id && !name && !email && !password) {
      throw new AppError(
        409,
        "Fields id, name, email and password are required"
      );
    }
    if (cooperatorAlreadyExists) {
      throw new AppError(
        409,
        "This cooperator id already exists in your database"
      );
    }

    const cooperator = new Cooperator();
    cooperator.id = id;
    cooperator.name = name;
    cooperator.email = email;
    cooperator.password = password;

    await cooperatorRepository.save(cooperator);

    return cooperator;
  };
}
