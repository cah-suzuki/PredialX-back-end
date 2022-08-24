import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("cooperator")
export class Cooperator {
  @PrimaryColumn("int")
  id: string;

  @Column({
    nullable: false,
    length: 50,
  })
  name: string;

  @Column({
    nullable: false,
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
    length: 100,
  })
  password: string;
}
