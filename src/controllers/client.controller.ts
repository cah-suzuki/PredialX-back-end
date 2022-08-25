import { Request, Response } from "express";

import CreateClientService from "../services/client/createClient.service";
import IndexClientService from "../services/client/indexClient.service";
import UpdateClientService from "../services/client/updateClient.service";
import listClientService from "../services/client/listClient.service";
import deleteClientService from "../services/client/deleteClient.service";

export default class ClientController {
  static store = async (request: Request, response: Response) => {
    try {
      const { id, name } = request.body;
      const client = await CreateClientService.execute({
        id,
        name,
      });
      return response.status(201).json(client);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static list = async (request: Request, response: Response) => {
    try {
      const clients = await listClientService.execute();
      return response.send(clients);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static index = async (request: Request, response: Response) => {
    try {
      const { client_id } = request.params;
      const clients = await IndexClientService.execute({ client_id });
      return response.send(clients);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static update = async (request: Request, response: Response) => {
    try {
      const { name } = request.body;
      const { client_id } = request.params;

      const updatedClient = await UpdateClientService.execute({
        name,
        client_id,
      });
      return response.status(200).json(updatedClient);
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };

  static delete = async (request: Request, response: Response) => {
    try {
      const { client_id } = request.params;

      await deleteClientService.execute({ client_id });

      return response.status(204).json();
    } catch (error) {
      if (error instanceof Error) {
        return response.status(400).json({ error: error.message });
      }
    }
  };
}
