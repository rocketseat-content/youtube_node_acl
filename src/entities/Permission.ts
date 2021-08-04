import { Column, Entity } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("permissions")
export class Permission extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
