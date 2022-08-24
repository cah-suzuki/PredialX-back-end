import { AppDataSource } from "../../data-source";
import { Cooperator } from "../../entities/cooperator.entity";
import { AppError } from "../../errors/AppError";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class LoginCooperatorService {
  static async execute(email: string, password: string) {
    const cooperatorRepository = AppDataSource.getRepository(Cooperator);
    const cooperator = await cooperatorRepository.findOne({ where: { email } });

    if (!cooperator) {
      throw new AppError(400, "email or password invalid");
    }

    const checkPassworld = bcrypt.compareSync(password, cooperator.password);

    if (!checkPassworld) {
      throw new AppError(400, "email or password invalid");
    }

    const token = jwt.sign({ email: email }, process.env.SECRET_KEY as string, {
      expiresIn: "24h",
    });

    return { token, user: cooperator };
  }
}
