const express =require('express');

const roomsRouter=express.Router();

roomsRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end('Will get room data ');
})
.post((req,res)=>{
    res.end(`Will update the room with the room name:${req.body.name}`);
})
.put((req,res)=>{
    res.end('Put operation is not support in this operation');
})
.delete((req,res)=>{
    res.end ('Will delete all of the room ');
});

module.exports=roomsRouter;