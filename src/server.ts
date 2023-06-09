import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { RestaurantRoute } from './routes/restaurants.route';
import { DishRoute } from './routes/dishes.route';
import { MenuRoute } from './routes/menu.route';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new RestaurantRoute(), new DishRoute(), new MenuRoute()]);

app.listen();
