import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Restaurant } from '@/interfaces/restaurants.interface';
import { MenuModel } from './menu.model';

export type RestaurantCreationAttributes = Optional<Restaurant, 'id' | 'name1'| 'description' | 'location' | 'openingTime' | 'closingTime' | 'deliveryPrice' | 'minimumOnlinePrice'>;

export class RestaurantModel extends Model<Restaurant, RestaurantCreationAttributes> implements Restaurant {
  public id: Number;
  public name1: String;
  public description: String;
  public location: String;
  public openingTime: String;
  public closingTime: String;
  public deliveryPrice: Number;
  public minimumOnlinePrice: Number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof RestaurantModel {
    RestaurantModel.init({
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name1: {
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
        tableName: 'restaurants',
        sequelize
      }
    );
    
    //RestaurantModel.hasMany(MenuModel);

    return RestaurantModel;
}