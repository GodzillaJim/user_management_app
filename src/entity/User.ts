import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Role } from "./Role";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ select: false })
  registrationVerificationToken: string;

  @Column({ select: false })
  password: string;

  @Column()
  isVerified: boolean;

  @Column({ type: "datetime" })
  verifiedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  lastModifiedAt: Date;

  @Column()
  isDeleted: boolean;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  isDisabled: boolean;

  @Column()
  roles: Role[];
}
