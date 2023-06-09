import { DB } from '@/database';
import { CreateDishesDTO } from '@/dtos/dishes.dto';
import { HttpException } from '@/exceptions/httpException';
import { Dish } from '@/interfaces/dishes.interface';
import { Service } from 'typedi';

@Service()
export class DishService {
  public async findAllDishes(): Promise<Dish[]> {
    const allDishes: Dish[] = await DB.Dishes.findAll();
    return allDishes;
  }

  public async findDishById(dishId: number): Promise<Dish> {
    const findDish: Dish = await DB.Dishes.findByPk(dishId);
    if (!findDish) throw new HttpException(409, "Dish doesn't exist");

    return findDish;
  }

  public async createDish(dishData: CreateDishesDTO): Promise<Dish> {
    const findDish: Dish = await DB.Dishes.findOne({ where: { name: dishData.name } });
    if (findDish) throw new HttpException(409, `This dish ${dishData.name} already exists`);

    const createDish: Dish = await DB.Dishes.create({ ...dishData });
    return createDish;
  }

  public async updateDish(dishId: number, dishData: CreateDishesDTO): Promise<Dish> {
    const findDish: Dish = await DB.Dishes.findByPk(dishId);
    if (!findDish) throw new HttpException(409, "Dish doesn't exist");

    await DB.Dishes.update({ ...dishData }, { where: { id: dishId } });

    const updateDish: Dish = await DB.Dishes.findByPk(dishId);
    return updateDish;
  }

  public async deleteDish(dishId: number): Promise<Dish> {
    const findDish: Dish = await DB.Dishes.findByPk(dishId);
    if (!findDish) throw new HttpException(409, "Dish doesn't exist");

    await DB.Dishes.destroy({ where: { id: dishId } });

    return findDish;
  }
}
