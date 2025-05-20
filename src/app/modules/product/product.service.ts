import { Product } from "./product.model";
import { TProduct } from "./product.type";

// create a new product
const createProductIntoDB = async (payload: TProduct) => {
    const dbRes = await Product.create(payload);
    return dbRes;
};

// get single product
const getSingleProductFromDB = async (id: string) => {
    const dbRes = await Product.findById(id);
    return dbRes;
};

// get all products
const getAllProductsFromDB = async () => {
    const dbRes = await Product.find();
    return dbRes;
};

export const productServices = {
    createProductIntoDB,
    getSingleProductFromDB,
    getAllProductsFromDB,
};
