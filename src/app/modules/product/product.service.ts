import { Product } from "./product.model";
import { TProduct } from "./product.type";

// create a new product
const createProductIntoDB = async (payload: TProduct) => {
    const dbRes = await Product.create(payload);
    return dbRes;
};

export const productServices = {
    createProductIntoDB,
};
