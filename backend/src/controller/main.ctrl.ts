import { CustomContext } from '../@types';
import {Connection} from 'typeorm'

export default class MainController {
    public static async main (ctx: CustomContext) {
        ctx.body = 'Hello World'
        const conn = ctx.dbconn
    }
}