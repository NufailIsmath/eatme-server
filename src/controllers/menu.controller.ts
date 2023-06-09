import { CreateMenuDTO } from "@/dtos/menu.dto";
import { IMenu } from "@/interfaces/menu.interface";
import { MenuService } from "@/services/menu.service";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";


export class MenuController {
  public menu = Container.get(MenuService);

  public getMenus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllMenus: IMenu[] = await this.menu.findAllMenus();

      res.status(200).json({ data: findAllMenus, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMenuById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const menuId = Number(req.params.id);
      const findOneMenuData: IMenu = await this.menu.findMenuById(menuId);

      res.status(200).json({ data: findOneMenuData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createMenu = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const menuData: CreateMenuDTO = req.body;
      const createMenuData: IMenu = await this.menu.createMenu(menuData);

      res.status(201).json({ data: createMenuData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateMenu = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.params.id)
      const menuId = Number(req.params.id);
      const menuData: CreateMenuDTO = req.body;
      const updateMenuData: IMenu = await this.menu.updateMenu(menuId, menuData);

      res.status(200).json({ data: updateMenuData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteMenu = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const menuId = Number(req.params.id);
      const deleteMenuData: IMenu = await this.menu.deleteMenu(menuId);

      res.status(200).json({ data: deleteMenuData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}