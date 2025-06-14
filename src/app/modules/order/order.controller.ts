import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { orderServices } from "./order.service";

// create order
const createOrder = catchAsync(async (req, res) => {
    const dbRes = await orderServices.createOrderIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Order has been completed successfully.",
        data: dbRes
    });
});

// get all orders
const getAllOrders = catchAsync(async (req, res) => {
    const dbRes = await orderServices.getAllOrdersFromDB();

    res.status(httpStatus.OK).json({
        success: true,
        message: "Orders have been fetched successfully.",
        data: dbRes
    });
});

// update payment status
const updatePaymentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await orderServices.updatePaymentStatusIntoDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Payment status has been updated successfully.",
        data: dbRes
    });
});

export const orderControllers = {
    createOrder,
    getAllOrders,
    updatePaymentStatus
};
