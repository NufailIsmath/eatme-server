import { Menu } from "@/interfaces/menu.interface";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { RestaurantModel } from "./restaurants.model";


export type MenuCreationAttributes = Optional<Menu, 'id' | 'name2'>;

export class MenuModel extends Model<Menu, MenuCreationAttributes> implements Menu {
  id?: Number;
  name2: String;
}

export default function (sequelize: Sequelize): typeof MenuModel {
    MenuModel.init(
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name2: {
          allowNull: false,
          type: DataTypes.STRING(45),
        },
      },
      {
        tableName: 'menu',
        sequelize,
      },
    );

    MenuModel.belongsTo(RestaurantModel);

    return MenuModel;
}