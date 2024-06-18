const CarsControllers = require( "../controllers/cars" );
import { Request, Response } from "express";
// import CarsControllers from "../controllers/cars";

class CarsHandlers {
  async getHandleCar(req:Request, res:Response){
    try{
      const response = await CarsControllers.getCars()
      res.send(200).json(response);
    } catch (error) {
      console.error(error);
      // throw new Error(error);
    }
  }
  async getHandleCarId( req:Request, res:Response ){
    const { id } = req.params;
    try {
      const response = await CarsControllers.getHandleCarId(id);
      res.send(201).json(response);
    } catch (error) {
      console.error(error);

    }
  }
  async createHandleCar( req:Request, res:Response ){
    const { 

     } = req.body;
    try {

      const response = await CarsControllers.createCar(

      );
      res.send(202).json(response);
    } catch (error) {
      console.error(error);
    }
  }
  async updateHandleCar( req:Request, res:Response ){
    const { id }= req.params;
    try {
      const response = await CarsControllers.updateCar(id)
    } catch (error) {
      
    }
  }
  async deleteHandleCar( req:Request, res:Response ){
    const { id } = req.params;
    try {
      const response = await CarsControllers.deleteCar(id);
      res.send(202).json(response)
    } catch (error) {
      
    }
  }
}

export default CarsHandlers;