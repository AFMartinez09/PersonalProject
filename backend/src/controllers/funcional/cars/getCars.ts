import { Request, Response } from "express";


export const getCars = ( req:Request, res:Response ) =>{
  res.json({
    message: 'get cars'
  });
}