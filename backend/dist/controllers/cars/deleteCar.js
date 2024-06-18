"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = void 0;
const deleteCar = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Car deleted',
        id
    });
    // try {
    // } catch (error) {
    // }
};
exports.deleteCar = deleteCar;
//# sourceMappingURL=deleteCar.js.map