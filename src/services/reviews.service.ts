import { DB } from '@/database';
import { CreateReviewDTO } from '@/dtos/reviews.dto';
import { HttpException } from '@/exceptions/httpException';
import { IReview } from '@/interfaces/reviews.interface';
import { Service } from 'typedi';

@Service()
export class ReviewService {
  public async findAllReviews(): Promise<IReview[]> {
    const allReview: IReview[] = await DB.Reviews.findAll();
    return allReview;
  }

  public async findReviewById(reviewId: number): Promise<IReview> {
    const findReview: IReview = await DB.Reviews.findByPk(reviewId);
    if (!findReview) throw new HttpException(409, "Review doesn't exist");

    return findReview;
  }

  public async findReveiwsByDishId(dishId: number): Promise<IReview[]> {
    const findReveiwsByDId: IReview[] = await DB.Reviews.findAll({where: {dish_id: dishId}});
    return findReveiwsByDId;
  }

  public async createReview(reviewData: CreateReviewDTO): Promise<IReview> {
    const createReviewData: IReview = await DB.Reviews.create({ ...reviewData });

    return createReviewData;
  }

  public async updateReview(reviewId: number, reviewData: CreateReviewDTO): Promise<IReview> {
    const findReview: IReview = await DB.Reviews.findByPk(reviewId);
    if (!findReview) throw new HttpException(409, "Review doesn't exist");

    await DB.Reviews.update({ ...reviewData }, { where: { id: reviewId } });

    const updateReview: IReview = await DB.Reviews.findByPk(reviewId);
    return updateReview;
  }

  public async deleteReview(reviewId: number): Promise<IReview> {
    const findReview: IReview = await DB.Reviews.findByPk(reviewId);
    if (!findReview) throw new HttpException(409, "Review doesn't exist");

    await DB.Reviews.destroy({ where: { id: reviewId } });

    return findReview;
  }
}
