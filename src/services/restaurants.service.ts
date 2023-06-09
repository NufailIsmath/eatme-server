import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { Restaurant } from '@/interfaces/restaurants.interface';
import { CreateRestaurantDTO } from '@/dtos/restaurant.dto';

@Service()
export class RestaurantService {
  public async findAllRestaurants(): Promise<Restaurant[]> {
    const allRestaurants: Restaurant[] = await DB.Restaurants.findAll();
    return allRestaurants;
  }

  public async findRestaurantsById(restaurantId: number): Promise<Restaurant> {
    const findRestaurant: Restaurant = await DB.Restaurants.findByPk(restaurantId);
    if (!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");

    return findRestaurant;
  }

  public async createRestaurant(restaurantData: CreateRestaurantDTO): Promise<Restaurant> {
    const findRestaurant: Restaurant = await DB.Restaurants.findOne({ where: { name: restaurantData.name } });
    if (findRestaurant) throw new HttpException(409, `This restaurant ${restaurantData.name} already exists`);

    const createRestaurantData: Restaurant = await DB.Restaurants.create({ ...restaurantData });

    return createRestaurantData;
  }

  public async updateRestaurant(restaurantId: number, restaurantData: CreateRestaurantDTO): Promise<Restaurant> {
    const findRestaurant: Restaurant = await DB.Restaurants.findByPk(restaurantId);
    if(!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");

    await DB.Restaurants.update({...restaurantData}, {where: {id: restaurantId}});

    const updateRestaurant: Restaurant = await DB.Restaurants.findByPk(restaurantId);
    return updateRestaurant;
  }

  public async deleteRestaurant(restaurantId: number): Promise<Restaurant> {
    const findRestaurant: Restaurant = await DB.Restaurants.findByPk(restaurantId);
    if(!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");
    
    await DB.Restaurants.destroy({where: {id: restaurantId}});

    return findRestaurant;
  }
}