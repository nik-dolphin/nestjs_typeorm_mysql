import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  fisrtName: string;

  @Column({ default: null })
  lastName: string;

  @Column({ default: null })
  age: number;

  @Column({ default: null })
  dob: string;
}
