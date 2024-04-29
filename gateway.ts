import express, { Request, Response } from 'express';
const gateway = express();
const PORT = 3030;

gateway.get('/', (req:Request, res:Response)=>{

        res
            .status(200)
            .json({message:"Setting up express...."});
});

gateway.listen(PORT, ()=>{
    console.log("running express");
});