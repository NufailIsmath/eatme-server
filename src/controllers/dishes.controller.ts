import { CreateDishesDTO } from "@/dtos/dishes.dto";
import { Dish } from "@/interfaces/dishes.interface";
import { DishService } from "@/services/dishes.service";
import { NextFunction, Request, Response } from 'express';
import Container from "typedi";


export class DishController {
  public dish = Container.get(DishService);

  public getDishes = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllDishes: Dish[] = await this.dish.findAllDishes();

      res.status(200).json({ data: findAllDishes, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getDishesById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dishId = Number(req.params.id);
      const findOneDishData: Dish = await this.dish.findDishById(dishId);

      res.status(200).json({ data: findOneDishData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createDish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dishData: CreateDishesDTO = req.body;
      const createDishData: Dish = await this.dish.createDish(dishData);

      res.status(201).json({ data: createDishData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateDish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dishId = Number(req.params.id);
      const dishData: CreateDishesDTO = req.body;
      const updateDishData: Dish = await this.dish.updateDish(dishId, dishData);

      res.status(200).json({ data: updateDishData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteDish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dishId = Number(req.params.id);
      const deleteDishData: Dish = await this.dish.deleteDish(dishId);

      res.status(200).json({ data: deleteDishData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}