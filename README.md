# eatme-server
## Project Set-up
* Run ``` npm i ``` to install the dependancies
* Create ```.env.development.local``` refer ```.env.development.local.example```
* Run ```npm run dev```. Note: The project has been tested and run on dev environment only


## API calls on postman
### Routes
* `'/dishes'`: To manage Dish
* `'/menu'`: To manage menu
* `'/restaurants'`: To manage restaurants
* `'/reviews'`: To manage reviews
* `'/users'`: To manage users

### Endpoints
* `GET 'localhost:<port_number>/<routes>/'`: Returns all data of the provided routes
* `GET 'localhost:<port_number>/<routes>/<id>'`: Returns the data contains the given id of the provided routes
* `POST 'localhost:<port_number>/<routes>/'`: Create a new data. Refer the ```DTO``` folder for the body format.
* `PUT 'localhost:<port_number>/<routes>/<id>'`: This updates the data of the provided id. Refer the ```DTO``` folder for the body format.
* `DELETE 'localhost:<port_number>/<routes>/<id>'`: Deletes the data of the provided id


* `GET localhost:<port_number>/restaurants/menu/<restaurant_id>`: This returns the menus, dishes and the reviews for each dishes.
