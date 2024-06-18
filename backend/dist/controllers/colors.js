"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ColorsController {
    constructor() {
    }
    getColors(req, res) {
        res.json({
            message: 'get Colors'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    getColorsById(res, req) {
        const { id } = req.params;
        res.json({
            message: 'get Colors by id',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    createColor(res, req) {
        const { body } = req;
        res.json({
            message: 'Colors was created'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    updateColor(res, req) {
        const { id } = req.params;
        const { body } = req;
        res.json({
            message: 'Color was updated',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    deleteColor(res, req) {
        const { id } = req.params;
        res.json({
            message: 'Color was deleted',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
}
exports.default = ColorsController;
//# sourceMappingURL=colors.js.map