import { Service } from 'typedi';
import { DB } from '@database';
import { HttpException } from '@/exceptions/httpException';
import { IRestaurant } from '@/interfaces/restaurants.interface';
import { CreateRestaurantDTO } from '@/dtos/restaurant.dto';

@Service()
export class RestaurantService {
  public async findAllRestaurants(): Promise<IRestaurant[]> {
    const allRestaurants: IRestaurant[] = await DB.Restaurants.findAll();
    return allRestaurants;
  }

  public async findRestaurantsById(restaurantId: number): Promise<IRestaurant> {
    const findRestaurant: IRestaurant = await DB.Restaurants.findByPk(restaurantId);
    if (!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");

    return findRestaurant;
  }

  public async createRestaurant(restaurantData: CreateRestaurantDTO): Promise<IRestaurant> {
    const findRestaurant: IRestaurant = await DB.Restaurants.findOne({ where: { name: restaurantData.name } });
    if (findRestaurant) throw new HttpException(409, `This restaurant ${restaurantData.name} already exists`);

    const createRestaurantData: IRestaurant = await DB.Restaurants.create({ ...restaurantData });

    return createRestaurantData;
  }

  public async updateRestaurant(restaurantId: number, restaurantData: CreateRestaurantDTO): Promise<IRestaurant> {
    const findRestaurant: IRestaurant = await DB.Restaurants.findByPk(restaurantId);
    if(!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");

    await DB.Restaurants.update({...restaurantData}, {where: {id: restaurantId}});

    const updateRestaurant: IRestaurant = await DB.Restaurants.findByPk(restaurantId);
    return updateRestaurant;
  }

  public async deleteRestaurant(restaurantId: number): Promise<IRestaurant> {
    const findRestaurant: IRestaurant = await DB.Restaurants.findByPk(restaurantId);
    if(!findRestaurant) throw new HttpException(409, "Restaurant doesn't exist");
    
    await DB.Restaurants.destroy({where: {id: restaurantId}});

    return findRestaurant;
  }
}