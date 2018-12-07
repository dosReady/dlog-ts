import * as Koa from 'koa'
export default async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next()
    } catch (error) {
        ctx.status = error.status || 500
        ctx.body = error.message
        ctx.app.emit('error', error, ctx)
    }
}