import { ReviewController } from "@/controllers/reviews.controller";
import { CreateReviewDTO } from "@/dtos/reviews.dto";
import { Routes } from "@/interfaces/routes.interface";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Router } from "express";


export class ReviewRoute implements Routes {
    public path = '/reviews';
    public router = Router();
    public review = new ReviewController();


    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.review.getReviews);
        this.router.get(`${this.path}/:id(\\d+)`, this.review.getReviewsById);
        this.router.post(`${this.path}`, ValidationMiddleware(CreateReviewDTO, 'body'), this.review.createReview);
        this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateReviewDTO, 'body'), this.review.updateReview);
        this.router.delete(`${this.path}/:id(\d+)`, this.review.deleteReview);
    }

}