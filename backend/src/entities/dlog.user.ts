import {Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm'

@Entity()
export default class DlogUser {

    @PrimaryColumn({
        type: 'varchar',
        length: 100
    })
    user_email: string

    @Column({
        type: 'varchar',
        length: 100
    })
    user_password: string

    @Column({
        type: 'varchar',
        length: 100
    })
    user_call: string

    @CreateDateColumn()
    create_date: Date

    @UpdateDateColumn()
    update_date: Date
}