"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrandsController {
    constructor() {
    }
    getBrands(req, res) {
        res.json({
            message: 'get brands'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    getBrandById(res, req) {
        const { id } = req.params;
        res.json({
            message: 'get brand by id',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    createBrand(res, req) {
        const { body } = req;
        res.json({
            message: 'brand was created'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    updateBrand(res, req) {
        const { id } = req.params;
        const { body } = req;
        res.json({
            message: 'Brand was updated',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
    deleteBrand(res, req) {
        const { id } = req.params;
        res.json({
            message: 'Brand was deleted',
            id
        });
        try {
        }
        catch (error) {
        }
    }
    ;
}
exports.default = BrandsController;
//# sourceMappingURL=brands.js.map