import * as Koa from 'koa'
import {createConnection} from "typeorm";
import {dbConfig} from '../../config'

export default async (ctx: Koa.Context, next: () => Promise<any>) => {
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
    console.log(ctx)
    next()
}