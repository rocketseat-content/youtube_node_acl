import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("products")
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
