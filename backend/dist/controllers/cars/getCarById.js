"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCarById = void 0;
const getCarById = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'CarById',
        id
    });
    // try {
    // } catch (error) {
    // }
};
exports.getCarById = getCarById;
//# sourceMappingURL=getCarById.js.map