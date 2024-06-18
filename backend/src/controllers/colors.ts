import { Request, Response } from "express";


class ColorsController {
  constructor(){

  }
  getColors( req:Request, res:Response){
    res.json({
      message: 'get Colors'
    });

    try {
      
    } catch (error) {
      
    }
  };

  getColorsById( res:Response, req:Request ){
    const { id } = req.params;
    res.json({
      message: 'get Colors by id',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };

  createColor( res:Response, req:Request ){
    const { body } = req;
    res.json({
      message: 'Colors was created'
    });

    try {
      
    } catch (error) {
      
    }
  };

  updateColor( res:Response, req:Request ){
    const { id } = req.params;
    const { body } = req;
    res.json({
      message: 'Color was updated',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };

  deleteColor( res:Response, req:Request ){
    const { id } = req.params;
    res.json({
      message: 'Color was deleted',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };
}

export default ColorsController;