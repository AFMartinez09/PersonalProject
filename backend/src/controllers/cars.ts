import { Request, Response } from "express";


class CarsControllers {
  constructor(){

  }
  getCars( req:Request, res:Response ){
    res.json({
      message: 'get cars'
    });
    
    try {
    
    } catch (error) {
        
    }
  };

  getCarById = (req:Request ,res:Response ) => {
    const { id } = req.params;
  
    res.json({
      message: 'CarById',
      id
    });
    
    try {
      
    } catch (error) {
      
    }
  };

  createCar = (req:Request, res:Response) => {
    const { body } = req;
  
    res.json({
      message: 'Car was created'
    });
    
    try {
      
    } catch (error) {
      
    }
  };

  updateCar = ( req:Request, res:Response ) => {
    const { id } = req.params;
    const { body } = req;
  
    res.json({
      message: 'car was Updated',
      id,
      body
    });
    
    try {
      
    } catch (error) {
      
    }
  
  };

  deleteCar = (req:Request, res:Response ) => {
    const { id } = req.params;
  
    res.json({
      message: 'Car was deleted',
      id
    });
    
    try {
      
    } catch (error) {
      
    }
  
  }

}

export default CarsControllers;