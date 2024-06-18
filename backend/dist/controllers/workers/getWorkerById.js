"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkerById = void 0;
const getWorkerById = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Worker by id',
        id
    });
    // try {
    // } catch (error) {
    // }
};
exports.getWorkerById = getWorkerById;
//# sourceMappingURL=getWorkerById.js.map