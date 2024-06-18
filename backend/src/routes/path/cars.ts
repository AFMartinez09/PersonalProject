import { Router } from "express";
const carsControllers  = require('../../controllers/cars');

const router = Router();

router.get('/', carsControllers.getCars);
router.post('/', carsControllers.createCar);

router.route('/:id')
  .get(carsControllers.getCarById)
  .put(carsControllers.updateCar)
  .delete(carsControllers.deleteCar);

  