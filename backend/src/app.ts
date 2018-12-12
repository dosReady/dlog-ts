import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as cors from '@koa/cors'
import router from './routes'
import {middleware} from './modules'

const app = new Koa()
app.use(bodyParser())
app.use(cors())
app.use(middleware.connectionMw)

app.use(router.routes())
app.use(router.allowedMethods())
app.on('error', (err: Error, ctx: Koa.Context) =>{
    console.log('[Error]')
    console.log(err)
})
app.listen(80)

console.log(`Server running on port 80 => http://localhost:80`)