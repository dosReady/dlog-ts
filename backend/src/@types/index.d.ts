import * as Koa from 'koa'
import {Connection} from "typeorm"
declare interface CustomContext extends Koa.Context {
    dbconn: Connection
}