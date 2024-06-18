"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorker = void 0;
const updateWorker = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: 'Worker updated',
        id
    });
    // try {
    // } catch (error) {
    // }
};
exports.updateWorker = updateWorker;
//# sourceMappingURL=updateWorker.js.map