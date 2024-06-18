import { Request, Response } from "express";


export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
      message: 'delete user',
      id
    });
    // try {
      
    // } catch (error) {
      
    // }
}