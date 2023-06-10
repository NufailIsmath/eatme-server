import { IReview } from '@/interfaces/reviews.interface';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type ReviewCreationAttributes = Optional<IReview, 'id' | 'rating' | 'comment'>;

export class Review extends Model<IReview, ReviewCreationAttributes> implements IReview {
  public id: Number;
  public rating: Number;
  public comment: String;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    },
    {
      tableName: 'reviews',
      sequelize,
    },
  );


  return Review;
}
