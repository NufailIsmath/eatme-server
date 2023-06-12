import { IMenu } from '@/interfaces/menu.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Restaurant } from './restaurants.model';
import { Dish } from './dishes.model';

export type MenuCreationAttributes = Optional<IMenu, 'id' | 'name'>;

export class Menu extends Model<IMenu, MenuCreationAttributes> implements IMenu {
  id?: Number;
  name: String;
  restaurant_id: Number;

  public static associate(): void {
      Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'});
  }
}



export default function (sequelize: Sequelize): typeof Menu {
  Menu.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      restaurant_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'menu',
      sequelize,
    },
  );

  Menu.hasMany(Dish);
  //Dish.belongsTo(Menu);
   //Menu.belongsTo(Restaurant);

  return Menu;
}
