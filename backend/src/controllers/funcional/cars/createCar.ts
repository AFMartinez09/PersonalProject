import { Request, Response } from "express";

export const createCar = (req:Request, res:Response) => {
  const { body } = req;

  res.json({
    message: 'postCar'
  });
  // try {
    
  // } catch (error) {
    
  // }
}