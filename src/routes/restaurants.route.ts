import { RestaurantController } from "@/controllers/restaurants.controller";
import { CreateRestaurantDTO } from "@/dtos/restaurant.dto";
import { Routes } from "@/interfaces/routes.interface";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Router } from "express";


export class RestaurantRoute implements Routes {
    public path = '/restaurants';
    public router = Router();
    public restaurant = new RestaurantController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.restaurant.getRestaurants);
        this.router.get(`${this.path}/:id(\\d+)`, this.restaurant.getRestaurantsById);
        this.router.post(`${this.path}`, ValidationMiddleware(CreateRestaurantDTO, 'body'), this.restaurant.createRestaurant);
        this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateRestaurantDTO, 'body'), this.restaurant.updateRestaurant);
        this.router.delete(`${this.path}/:id(\d+)`, this.restaurant.deleteRestaurant);
    }
}