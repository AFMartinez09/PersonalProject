"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpensesController {
    constructor() {
    }
    getExpenses(req, res) {
        res.json({
            message: 'get expenses'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    getExpensesById(res, req) {
        const { id } = req.params;
        res.json({
            message: 'get expenses by id',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    createExpenses(res, req) {
        const { body } = req;
        res.json({
            message: 'Expense was created'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    updateExpense(res, req) {
        const { id } = req.params;
        const { body } = req;
        res.json({
            message: 'Expense was deleted',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
}
exports.default = ExpensesController;
//# sourceMappingURL=expenses.js.map