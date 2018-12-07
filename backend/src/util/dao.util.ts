import {createConnection} from "typeorm";
import * as entity from '../entity'
import {dbConfig} from '../config'

export default class DaoUtil {
    public static async test () {
        try {
            const connection = await createConnection({
                type: "mysql",
                host: dbConfig.host,
                port: dbConfig.port,
                username: dbConfig.user,
                password: dbConfig.password,
                database: dbConfig.database,
                entities: [
                    entity.dlogUser
                ],
                synchronize: true
            })
           const select = await connection.manager.find(entity.dlogUser)
        } catch (error) {
           throw error
        }
    }
}