import { IDish } from "@/interfaces/dishes.interface";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";



export type DishCreationAttributes = Optional<IDish, 'id' | 'name' | 'description' | 'calories' | 'price' | 'bannerImage'>;

export class Dish extends Model<IDish, DishCreationAttributes> implements IDish {
  public id: Number;
  public name: String;
  public description: String;
  public calories: Number;
  public price: Number;
  public bannerImage: String;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
        },
        {
            tableName: 'dishes',
            sequelize,
        }
    );



    return Dish;
}