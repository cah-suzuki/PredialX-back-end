import { Request, Response } from "express";

import CreateCooperatorService from "../services/cooperator/createCooperator.service";
import IndexCooperatorService from "../services/cooperator/indexCooperator.service";
import UpdateCooperatorService from "../services/cooperator/updateCooperator.service";
import ListCooperatorService from "../services/cooperator/listCooperator.service";
import DeleteCooperatorService from "../services/cooperator/deleteCooperator.service";
import LoginCooperatorService from "../services/cooperator/loginCooperator.service";

export default class CooperatorController {
  static store = async (request: Request, response: Response) => {
    try {
      const { id, name, email, password } = request.body;
      const cooperator = await CreateCooperatorService.execute({
        id,
        name,
        email,
        password,
      });
      return response.status(201).json(cooperator);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static list = async (request: Request, response: Response) => {
    try {
      const cooperators = await ListCooperatorService.execute();
      return response.send(cooperators);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static index = async (request: Request, response: Response) => {
    try {
      const { cooperator_id } = request.params;
      const cooperators = await IndexCooperatorService.execute({
        cooperator_id,
      });
      return response.send(cooperators);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static update = async (request: Request, response: Response) => {
    try {
      const { name, email, password } = request.body;
      const { cooperator_id } = request.params;

      const updatedCooperator = await UpdateCooperatorService.execute({
        name,
        email,
        password,
        cooperator_id,
      });
      return response.status(200).json(updatedCooperator);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static delete = async (request: Request, response: Response) => {
    try {
      const { cooperator_id } = request.params;

      await DeleteCooperatorService.execute({ cooperator_id });

      return response.status(204).json();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static login = async (request: Request, response: Response) => {
    try {
      const { email, password } = request.body;

      const token = await LoginCooperatorService.execute(email, password);

      return response.status(200).json(token);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };
}
