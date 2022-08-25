import { ICooperator } from "../../interfaces/cooperator";
import { AppDataSource } from "../../data-source";
import { Cooperator } from "../../entities/cooperator.entity";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";

export default class CreateClientService {
  static execute = async ({ id, name, email, password }: ICooperator) => {
    if (!id && !name && !email && !password) {
      throw new AppError(
        409,
        "Fields id, name, email and password are required"
      );
    }

    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperatorAlreadyExists = await cooperatorRepository.findOne({
      where: { id },
    });

    const cooperatorEmailAlreadyExists = await cooperatorRepository.findOne({
      where: { email },
    });

    if (cooperatorAlreadyExists) {
      throw new AppError(
        409,
        "This cooperator id already exists in your database"
      );
    }

    if (cooperatorEmailAlreadyExists) {
      throw new AppError(
        409,
        "This cooperator email already exists in your database"
      );
    }

    const cooperator = new Cooperator();
    cooperator.id = id;
    cooperator.name = name;
    cooperator.email = email;
    cooperator.password = bcrypt.hashSync(password, 8);

    await cooperatorRepository.save(cooperator);

    return cooperator;
  };
}
