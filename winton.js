import { readFile } from "fs/promises"
import Koa from "koa"
const app = new Koa()
const winton = await readFile(new URL("./winton.jpeg", import.meta.url))
app.use(async ctx => {
	ctx.set("Content-Type", "image/jpeg")
	ctx.body = winton
})
const port = Number(process.env.PORT || 3000)
app.listen(port)
