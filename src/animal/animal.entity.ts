import { timeStamp } from 'console';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


// sesuaikan dengan nama tabel yang ada jika sudah ada
@Entity({ name: 't_animal'})
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp', default: () => null})
    created_at: Date;

    @Column({ type: 'timestamp', default: () => null})
    updated_at: Date;

}