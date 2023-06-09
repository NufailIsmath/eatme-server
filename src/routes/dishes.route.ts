import { DishController } from "@/controllers/dishes.controller";
import { CreateDishesDTO } from "@/dtos/dishes.dto";
import { Routes } from "@/interfaces/routes.interface";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Router } from "express";


export class DishRoute implements Routes {
  public path = '/dishes';
  public router = Router();
  public dish = new DishController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.dish.getDishes);
    this.router.get(`${this.path}/:id(\\d+)`, this.dish.getDishesById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateDishesDTO, 'body'), this.dish.createDish);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateDishesDTO, 'body'), this.dish.updateDish);
    this.router.delete(`${this.path}/:id(\d+)`, this.dish.deleteDish);
  }
}