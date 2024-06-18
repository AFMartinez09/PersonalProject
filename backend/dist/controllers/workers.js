"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorkersControllers {
    constructor() {
    }
    getWorkers(req, res) {
        res.json({
            message: 'get workers'
        });
    }
    ;
    getWorkerById(req, res) {
        const { id } = req.params;
        res.json({
            message: 'get worker by id',
            id
        });
    }
    ;
    createWorker(req, res) {
        const { body } = req;
        res.json({
            message: 'worker was created'
        });
    }
    ;
    updateWorker(req, res) {
        const { id } = req.params;
        const { body } = req;
        res.json({
            message: 'worker was updated'
        });
    }
    ;
    deleteWorker(req, res) {
        const { id } = req.params;
        res.json({
            message: 'worker was deleted',
            id
        });
    }
    ;
}
exports.default = WorkersControllers;
//# sourceMappingURL=workers.js.map