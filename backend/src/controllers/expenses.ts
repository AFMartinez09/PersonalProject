import { Request, Response } from "express";


class ExpensesController {
  constructor(){

  }
  getExpenses( req:Request, res:Response){
    res.json({
      message: 'get expenses'
    });

    try {
      
    } catch (error) {
      
    }
  };

  getExpensesById( res:Response, req:Request ){
    const { id } = req.params;
    res.json({
      message: 'get expenses by id',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };

  createExpenses( res:Response, req:Request ){
    const { body } = req;
    res.json({
      message: 'Expense was created'
    });

    try {
      
    } catch (error) {
      
    }
  };

  updateExpense( res:Response, req:Request ){
    const { id } = req.params;
    const { body } = req;
    res.json({
      message: 'Expense was deleted',
      id
    });

    try {
      
    } catch (error) {
      
    }
  };
}

export default ExpensesController;