import {createConnection} from "typeorm";
import {dbConfig} from '../../config'
import { CustomContext } from '../../@types';

export default async (ctx: CustomContext, next: () => Promise<any>) => {
    const connection = await createConnection({
        type: "mysql",
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        entities: [
            "src/entities/*.ts"
        ],
        synchronize: true
    })
    ctx.dbconn = connection
    next()
}