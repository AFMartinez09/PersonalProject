"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const getUserById = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'getUsersById'
    });
    // try {
    // } catch (error) {
    // }
};
exports.getUserById = getUserById;
//# sourceMappingURL=getById.js.map