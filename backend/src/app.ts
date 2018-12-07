import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as helmet from 'koa-helmet'
import * as cors from '@koa/cors'
import router from './routes'
import {serverConfig, jwtConfig} from './config'
import {exception} from './middleware'

const app = new Koa()
app.use(helmet())
app.use(bodyParser())
app.use(cors())


app.use(router.routes())
app.use(router.allowedMethods())
app.use(exception)
app.on('error', (err: Error, ctx: Koa.Context) =>{
    console.log('[Error]')
    console.log(err)
})
app.listen(serverConfig.port)

console.log(`Server running on port ${serverConfig.port} => http://localhost:${serverConfig.port}`)