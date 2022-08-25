import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("client")
export class Client {
  @PrimaryColumn("int")
  id: string;

  @Column({
    nullable: false,
    length: 50,
  })
  name: string;
}
