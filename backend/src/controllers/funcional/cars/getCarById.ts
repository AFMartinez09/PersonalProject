import { Request, Response } from "express"


export const getCarById = (req:Request ,res:Response ) => {
  const { id } = req.params;

  res.json({
    message: 'CarById',
    id
  });
  // try {
    
  // } catch (error) {
    
  // }
}