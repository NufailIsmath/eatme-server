import { CreateRestaurantDTO } from '@/dtos/restaurant.dto';
import { IRestaurant } from '@/interfaces/restaurants.interface';
import { RestaurantService } from '@/services/restaurants.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class RestaurantController {
  public restaurant = Container.get(RestaurantService);

  public getRestaurants = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRestaurants: IRestaurant[] = await this.restaurant.findAllRestaurants();

      res.status(200).json({ data: findAllRestaurants, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getRestaurantsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurantId = Number(req.params.id);
      const findOneRestaurantData: IRestaurant = await this.restaurant.findRestaurantsById(restaurantId);

      res.status(200).json({ data: findOneRestaurantData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createRestaurant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurantData: CreateRestaurantDTO = req.body;
      const createRestaurantData: IRestaurant = await this.restaurant.createRestaurant(restaurantData);

      res.status(201).json({ data: createRestaurantData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateRestaurant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurantId = Number(req.params.id);
      const restaurantData: CreateRestaurantDTO = req.body;
      const updateRestaurantData: IRestaurant = await this.restaurant.updateRestaurant(restaurantId, restaurantData);

      res.status(200).json({ data: updateRestaurantData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteRestaurant = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const restaurantId = Number(req.params.id);
      const deleteRestaurantData: IRestaurant = await this.restaurant.deleteRestaurant(restaurantId);

      res.status(200).json({ data: deleteRestaurantData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
