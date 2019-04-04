const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const port = 3000;
const app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const session = require('express-session');
const fileStore = require('session-file-store')(session);

const gameRouter = require('./routes/game');
const congratsRouter = require('./routes/congrats')

app.use(express.urlencoded({ extended: true }));

app.use(session({ 
    store: new fileStore(),
    secret: "aewguashugwhgjoaghh3454363534ht34y346qtggagahga"
}))

app.use("/guess", gameRouter);

app.use('/congrats', congratsRouter)

app.listen(port, () => {
    console.log(`now listening to port: ${port}`)
});