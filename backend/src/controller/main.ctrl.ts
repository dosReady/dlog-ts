import { BaseContext } from 'koa';
import daoUtil from '../util/dao.util'
export default class MainController {
    public static async main (ctx: BaseContext) {
        daoUtil.test()
        ctx.body = 'Hello World'
    }
}