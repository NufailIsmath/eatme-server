import { DB } from "@/database";
import { CreateMenuDTO } from "@/dtos/menu.dto";
import { HttpException } from "@/exceptions/httpException";
import { IMenu } from "@/interfaces/menu.interface";
import { Service } from "typedi";


@Service()
export class MenuService {
  public async findAllMenus(): Promise<IMenu[]> {
    const allMenus: IMenu[] = await DB.Menus.findAll();
    return allMenus;
  }

  public async findMenuById(menuId: number): Promise<IMenu> {
    const findMenu: IMenu = await DB.Menus.findByPk(menuId);
    if (!findMenu) throw new HttpException(409, "Menu doesn't exist");

    return findMenu;
  }

  public async createMenu(menuData: CreateMenuDTO): Promise<IMenu> {
    const findMenu: IMenu = await DB.Menus.findOne({ where: { name: menuData.name } });
    if (findMenu) throw new HttpException(409, `This restaurant ${menuData.name} already exists`);

    const createMenuData: IMenu = await DB.Menus.create({ ...menuData });

    return createMenuData;
  }

  public async updateMenu(menuId: number, menuData: CreateMenuDTO): Promise<IMenu> {
    const findMenu: IMenu = await DB.Menus.findByPk(menuId);
    if (!findMenu) throw new HttpException(409, "Menu doesn't exist");

    await DB.Menus.update({ ...menuData }, { where: { id: menuId } });

    const updateMenu: IMenu = await DB.Menus.findByPk(menuId);
    return updateMenu;
  }

  public async deleteMenu(menuId: number): Promise<IMenu> {
    const findMenu: IMenu = await DB.Menus.findByPk(menuId);
    if (!findMenu) throw new HttpException(409, "Menu doesn't exist");

    await DB.Menus.destroy({ where: { id: menuId } });

    return findMenu;
  }
}