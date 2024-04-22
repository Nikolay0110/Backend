const http = require('http');
const Koa = require('koa');

const app = new Koa();


app.use((ctx, next) => {
	console.log(ctx.request.query)

	ctx.response.body = 'Hello World';

	next();
});


app.use((ctx) => {
	console.log('i am a second middleware')

	ctx.response.body = 'Hello World';
});


const server = http.createServer(app.callback());

const port = 7070;
// слушаем определённый порт
server.listen(port, (err) => {
	if (err) {
		return console.log('Error occured:', error)
	}

	console.log(`server is listening on ${port}`)
});
