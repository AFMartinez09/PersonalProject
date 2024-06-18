"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carsControllers = require('../../controllers/cars');
const router = (0, express_1.Router)();
router.get('/', carsControllers.getCars);
router.post('/', carsControllers.createCar);
router.route('/:id')
    .get(carsControllers.getCarById)
    .put(carsControllers.updateCar)
    .delete(carsControllers.deleteCar);
//# sourceMappingURL=cars.js.map