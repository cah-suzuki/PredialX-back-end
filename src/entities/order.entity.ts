import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Client } from "./client.entity";
import { Cooperator } from "./cooperator.entity";

@Entity("order")
export class Order {
  @PrimaryColumn("int")
  id: string;

  @Column({
    nullable: false,
    length: 255,
  })
  issue_report: string;

  @Column({
    nullable: false,
  })
  date: Date;

  @OneToOne(() => Cooperator, {
    eager: true,
  })
  @JoinColumn()
  cooperator: Cooperator;

  @OneToOne(() => Client, {
    eager: true,
  })
  @JoinColumn()
  client: Client;
}
