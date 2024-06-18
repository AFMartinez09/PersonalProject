import { Request, Response } from "express";


class BrandsController {
  constructor(){

  }
  getBrands( req:Request, res:Response){
    res.json({
      message: 'get brands'
    });

    try {
      
    } catch (error) {
      
    }
  };

  getBrandById( res:Response, req:Request ){
    const { id } = req.params;
    res.json({
      message: 'get brand by id',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };

  createBrand( res:Response, req:Request ){
    const { body } = req;
    res.json({
      message: 'brand was created'
    });

    try {
      
    } catch (error) {
      
    }
  };

  updateBrand( res:Response, req:Request ){
    const { id } = req.params;
    const { body } = req;
    res.json({
      message: 'Brand was updated',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };

  deleteBrand( res:Response, req:Request ){
    const { id } = req.params;
    res.json({
      message: 'Brand was deleted',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };
}

export default BrandsController;