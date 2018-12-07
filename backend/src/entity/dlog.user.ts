import {Entity, Column, PrimaryColumn} from 'typeorm'

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

    @Column({
        type: 'timestamp',
        default: new Date()
    })
    create_date: Date

    @Column({
        type: 'timestamp',
        default: new Date()
    })
    update_date: Date
}