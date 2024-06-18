import { Request, Response } from "express";


class WorkersControllers {
  constructor(){

  }
  getWorkers( req:Request, res:Response ) {
    res.json({
      message: 'get workers'
    });
  };

  getWorkerById( req:Request, res:Response ) {
    const { id } =req.params;
    res.json({
      message: 'get worker by id',
      id
    });
  };

  createWorker( req:Request, res:Response ) {
    const{ body } = req;
    res.json({
      message: 'worker was created'
    });
  };

  updateWorker( req:Request, res:Response ) {
    const { id }= req.params;
    const { body } = req;
    res.json({
      message: 'worker was updated'
    });
  };

  deleteWorker( req:Request, res:Response ) {
    const{ id } = req.params;
    res.json({
      message: 'worker was deleted',
      id
    });
  };

}

export default WorkersControllers;