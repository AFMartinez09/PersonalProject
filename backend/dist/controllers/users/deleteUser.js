"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'delete user',
        id
    });
    // try {
    // } catch (error) {
    // }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=deleteUser.js.map