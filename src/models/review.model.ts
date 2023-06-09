import { Review } from "@/interfaces/reviews.interface";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";


export type ReviewCreationAttributes = Optional<Review,'id' | 'rating'| 'comment'>;

export class ReviewModel extends Model<Review, ReviewCreationAttributes> implements Review {
  public id: Number;
  public rating: Number;
  public comment: String;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


export default function (sequelize: Sequelize): typeof ReviewModel {
    ReviewModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        rating: {
            allowNull: false,
            type: DataTypes.FLOAT,
        },
        comment: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'reviews',
        sequelize
    }
    );

    return ReviewModel;
}