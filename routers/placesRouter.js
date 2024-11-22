const express = require('express');
const placesRouter = express.Router();

placesRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will get all the places');
})
.post ((req,res)=>{
    res.end (`Will update a new place name : ${req.body.name}`);
})
.put ((req,res)=>{
    res.end(`Put opertion is not support in this router`);
})
.delete((req,res)=>{
    res.end('Will delete all of the places');
});
module.exports= placesRouter;