const express=require('express');

const peopleRouter= express.Router();

peopleRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res)=>{
    res.end ('Will get all of the people in the list');
})
.post((req,res)=>{
    res.end(`Will add one more person name:${req.body.name} to the people list`);
})
.put((req,res)=>{
    res.end('Put operation is not support in this router');
})
.delete((req,res)=>{
    res.end('Will delete all of the people in this people database');
});
module.exports=peopleRouter;