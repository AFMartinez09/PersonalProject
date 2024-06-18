import { Request, Response } from "express";


class UsersController {
  constructor(){

  }
 
  getUsers( req:Request, res:Response){
    res.json({
      message: 'getUsers'
    });
    
    try {
      
    } catch (error) {
      
    }
  };
 
  getUserById(req:Request, res:Response){
    const{ id } = req.params;
    res.json({
      message: 'getUserById',
      id
    });
    
    try {
      
    } catch (error) {
      
    }
  };
 
  createUser( req:Request, res:Response ) {
    const{ body }= req;
    res.json({
      message: 'User was created',
    });
    
    try {
      
    } catch (error) {
      
    }
  };

  updateUser = (req:Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
      message: 'User was created',
    });

    try {
      
    } catch (error) {
      
    }
  };

  deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
      message: 'user was deleted',
      id
    });
    
    try {
      
    } catch (error) {
      
    }
  };
}

export default UsersController;