import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export default class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  driver_license: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
