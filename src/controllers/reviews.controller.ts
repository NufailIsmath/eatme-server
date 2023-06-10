import { CreateReviewDTO } from "@/dtos/reviews.dto";
import { IReview } from "@/interfaces/reviews.interface";
import { ReviewService } from "@/services/reviews.service";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";


export class ReviewController {
  public review = Container.get(ReviewService);

  public getReviews = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllReviews: IReview[] = await this.review.findAllReviews();

      res.status(200).json({ data: findAllReviews, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getReviewsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewId = Number(req.params.id);
      const findOneReviewData: IReview = await this.review.findReviewById(reviewId);

      res.status(200).json({ data: findOneReviewData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewData: CreateReviewDTO = req.body;
      const createReviewData: IReview = await this.review.createReview(reviewData);

      res.status(200).json({ data: createReviewData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewId = Number(req.params.id);
      const reviewData: CreateReviewDTO = req.body;
      const updateReviewData: IReview = await this.review.updateReview(reviewId, reviewData);

      res.status(200).json({ data: updateReviewData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteReview = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reviewId = Number(req.params.id);
      const deleteReviewData: IReview = await this.review.deleteReview(reviewId);

      res.status(200).json({ data: deleteReviewData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}