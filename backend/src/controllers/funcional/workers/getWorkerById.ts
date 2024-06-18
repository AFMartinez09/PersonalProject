import { Request, Response } from "express";



export const getWorkerById = ( req:Request, res:Response ) => {
  const { id } = req.params;

  res.json({
    message: 'Worker by id',
    id
  });

    // try {
    
  // } catch (error) {
    
  // }
}