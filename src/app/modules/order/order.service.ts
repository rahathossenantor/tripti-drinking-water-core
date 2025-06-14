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
        .populate("customer");

    return dbRes;
};

// update payment status
const updatePaymentStatusIntoDB = async (id: string) => {
    const dbRes = await Order.findByIdAndUpdate(
        id,
        { paymentStatus: "Paid" },
        { new: true }
    );
    return dbRes;
};

// delete order
const deleteOrderFromDB = async (id: string) => {
    const dbRes = await Order.findByIdAndDelete(id);
    return dbRes;
};

export const orderServices = {
    createOrderIntoDB,
    getAllOrdersFromDB,
    updatePaymentStatusIntoDB,
    deleteOrderFromDB
};
