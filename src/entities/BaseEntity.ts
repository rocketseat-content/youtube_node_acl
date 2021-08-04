import { PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class BaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
