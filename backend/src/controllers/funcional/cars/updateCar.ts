import { Request, Response } from "express";



export const updateCar = ( req:Request, res:Response ) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    message: 'car Upfdate',
    id,
    body
  });
    // try {
    
  // } catch (error) {
    
  // }

}