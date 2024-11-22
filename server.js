const express = require('express');
const morgan = require('morgan');
const placesRouter = require('./routers/placesRouter');
const peopleRouter = require('./routers/peopleRouter');
const roomsRouter=require('./routers/roomsRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(__dirname+'/public'));
app.use('/places',placesRouter);
app.use('/people',peopleRouter);
app.use('/rooms',roomsRouter);

app.use((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end('This is my portfolio using express');

});
app.listen(port,hostname,()=>{
    console.log(`server is running at https://${hostname}:${port}`);
});