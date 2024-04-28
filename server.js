const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');// Импортируем koa-body
const querystring = require('querystring');
 
const app = new Koa();

app.use(cors());
app.use(koaBody());


app.use(async (ctx, next) => {
	
	console.log(ctx.request.body)
	ctx.body = 'Данные получены успешно'

	await next();
});


// app.use(async (ctx, next) => {
// 	console.log('i am a second middleware');
// 	console.log(ctx.request.body);

// 	await next();
// });


const server = http.createServer(app.callback());

const port = 7070;
// слушаем определённый порт
server.listen(port, (err) => {
	if (err) {
		return console.log('Error occured:', err)
	}

	console.log(`server is listening on ${port}`)
});
