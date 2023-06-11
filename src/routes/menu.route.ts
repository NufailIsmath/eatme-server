import { MenuController } from "@/controllers/menu.controller";
import { CreateMenuDTO } from "@/dtos/menu.dto";
import { Routes } from "@/interfaces/routes.interface";
import { ValidationMiddleware } from "@/middlewares/validation.middleware";
import { Router } from "express";


export class MenuRoute implements Routes {
  public path = '/menu';
  public router = Router();
  public menu = new MenuController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.menu.getMenus);
    this.router.get(`${this.path}/:id(\\d+)`, this.menu.getMenuById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateMenuDTO, 'body'), this.menu.createMenu);
    this.router.put(`${this.path}/:id(\\d+)`, ValidationMiddleware(CreateMenuDTO, 'body'), this.menu.updateMenu);
    this.router.delete(`${this.path}/:id(\\d+)`, this.menu.deleteMenu);
  }
}