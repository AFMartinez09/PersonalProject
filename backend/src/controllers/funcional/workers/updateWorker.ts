import { Request, Response } from "express";



export const updateWorker = ( req:Request, res:Response ) => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    message: 'Worker updated',
    id
  });

    // try {
    
  // } catch (error) {
    
  // }
}