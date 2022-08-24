export interface ICooperator {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ICooperatorId {
  cooperator_id: string;
}

export interface ICooperatorUpdate {
  name: string;
  email: string;
  password: string;
  cooperator_id: string;
}
