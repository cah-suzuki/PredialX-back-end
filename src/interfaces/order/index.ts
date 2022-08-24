export interface IOrder {
  id: string;
  date: Date;
  issue_report: string;
  client_id: string;
  cooperator_id: string;
}

export interface IOrderId {
  order_id: string;
}

export interface IOrderUpdate {
  date: Date;
  issue_report: string;
  client_id: string;
  cooperator_id: string;
}
