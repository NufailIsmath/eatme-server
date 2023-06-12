import { IDish } from '@/interfaces/dishes.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Review } from './review.model';
import { Menu } from './menu.model';

export type DishCreationAttributes = Optional<IDish, 'id' | 'name' | 'description' | 'calories' | 'price' | 'bannerImage'>;

export class Dish extends Model<IDish, DishCreationAttributes> implements IDish {
  public id: Number;
  public name: String;
  public description: String;
  public calories: Number;
  public price: Number;
  public bannerImage: String;
  public menu_id: Number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate(): void {
    Dish.belongsTo(Menu, { foreignKey: 'menu_id' });
  }
}

export default function (sequelize: Sequelize): typeof Dish {
  Dish.init(
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
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      calories: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      bannerImage: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      menu_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'dish',
      sequelize,
    },
  );

  Dish.hasMany(Review);
  //Review.belongsTo(Dish)

  //Review.belongsTo(Dish)

  return Dish;
}
