import MongoDAO from "../models/MongoDAO.js"
import UserService from "./user.js"
// import ProductService from "./product.js"
import config from '../config.js'

let dao
switch (config.app.persistence) {
    case "MONGO":
        dao = new MongoDAO(config.mongo)
        break;

    default:
        break;
}

export const userService = new UserService(dao)
// export const productService = new ProductService(dao)