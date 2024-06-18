import { Request, Response } from 'express'


export  const getUserById = (req: Request, res: Response ) => {
  const { id } = req.params;

  res.json({
    message: 'getUsersById'
  });
  // try {
    
  // } catch (error) {
    
  // }
}

