import { Order } from "./order.model";
import { TOrder } from "./order.type";

// create a new order
const createOrderIntoDB = async (payload: TOrder) => {
    const dbRes = await Order.create(payload);
    return dbRes;
};

export const orderServices = {
    createOrderIntoDB
};
