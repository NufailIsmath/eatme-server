import { IReview } from '@/interfaces/reviews.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Dish } from './dishes.model';

export type ReviewCreationAttributes = Optional<IReview, 'id' | 'rating' | 'comment'>;

export class Review extends Model<IReview, ReviewCreationAttributes> implements IReview {
  public id: Number;
  public rating: Number;
  public comment: String;
  public dish_id: Number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate(): void {
    Review.belongsTo(Dish, { foreignKey: 'dish_id' });
  }
}

export default function (sequelize: Sequelize): typeof Review {
  Review.init(
    {
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
        type: DataTypes.STRING,
      },
      dish_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: 'review',
      sequelize,
    },
  );


  return Review;
}
