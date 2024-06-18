"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCar = void 0;
const updateCar = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: 'car Upfdate',
        id,
        body
    });
    // try {
    // } catch (error) {
    // }
};
exports.updateCar = updateCar;
//# sourceMappingURL=updateCar.js.map