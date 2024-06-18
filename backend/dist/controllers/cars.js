"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarsControllers {
    constructor() {
        this.getCarById = (req, res) => {
            const { id } = req.params;
            res.json({
                message: 'CarById',
                id
            });
            try {
            }
            catch (error) {
            }
        };
        this.createCar = (req, res) => {
            const { body } = req;
            res.json({
                message: 'Car was created'
            });
            try {
            }
            catch (error) {
            }
        };
        this.updateCar = (req, res) => {
            const { id } = req.params;
            const { body } = req;
            res.json({
                message: 'car was Updated',
                id,
                body
            });
            try {
            }
            catch (error) {
            }
        };
        this.deleteCar = (req, res) => {
            const { id } = req.params;
            res.json({
                message: 'Car was deleted',
                id
            });
            try {
            }
            catch (error) {
            }
        };
    }
    getCars(req, res) {
        res.json({
            message: 'get cars'
        });
        try {
        }
        catch (error) {
        }
    }
    ;
}
exports.default = CarsControllers;
//# sourceMappingURL=cars.js.map