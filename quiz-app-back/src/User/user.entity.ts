// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ nullable:true })
  deleted_at: Date;

  @Column({ type: 'longblob', nullable: true }) // Assuming User_Photo is of type longblob in your MySQL database
  user_photo: Buffer;
}