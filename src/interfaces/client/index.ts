export interface IClient {
  id: string;
  name: string;
}

export interface IClientId {
  client_id: string;
}

export interface IClientUpdate {
  name: string;
  client_id: string;
}
