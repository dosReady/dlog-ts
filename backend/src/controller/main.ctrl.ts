import { BaseContext } from 'koa';
export default class MainController {
    public static async main (ctx: BaseContext) {
        ctx.body = 'Hello World'
    }
}