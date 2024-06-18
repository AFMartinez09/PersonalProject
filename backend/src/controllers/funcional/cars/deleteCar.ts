import { Request, Response } from "express";



export const deleteCar = (req:Request, res:Response ) => {
  const { id } = req.params;

  res.json({
    message: 'Car deleted',
    id
  });
    // try {
    
  // } catch (error) {
    
  // }

}