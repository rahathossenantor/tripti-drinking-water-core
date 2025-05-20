import { Order } from "./order.model";
import { TOrder } from "./order.type";

// create a new order
const createOrderIntoDB = async (payload: TOrder) => {
    const dbRes = await Order.create(payload);
    return dbRes;
};

// get all orders
const getAllOrdersFromDB = async () => {
    const dbRes = await Order.find()
        .populate("customer")
        .populate("product");

    return dbRes;
};

export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
};
