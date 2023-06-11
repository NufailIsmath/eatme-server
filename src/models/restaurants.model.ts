import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { IRestaurant } from '@/interfaces/restaurants.interface';
import { Menu } from './menu.model';


export type RestaurantCreationAttributes = Optional<IRestaurant, 'id' | 'name'| 'description' | 'location' | 'openingTime' | 'closingTime' | 'deliveryPrice' | 'minimumOnlinePrice'>;

export class Restaurant extends Model<IRestaurant, RestaurantCreationAttributes> implements IRestaurant {
  public id: Number;
  public name: String;
  public description: String;
  public location: String;
  public openingTime: String;
  public closingTime: String;
  public deliveryPrice: Number;
  public minimumOnlinePrice: Number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof Restaurant {
    Restaurant.init({
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
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      openingTime: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      closingTime: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      deliveryPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      minimumOnlinePrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
      {
        tableName: 'restaurant',
        sequelize
      }
    );
    
    Restaurant.hasMany(Menu);

    return Restaurant;
}