import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { orderServices } from "./order.service";

// create order
const createOrder = catchAsync(async (req, res) => {
    const dbRes = await orderServices.createOrderIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে পানি দেয়া হয়েছে।",
        data: dbRes
    });
});

// get all orders
const getAllOrders = catchAsync(async (req, res) => {
    const dbRes = await orderServices.getAllOrdersFromDB();

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে সকল অর্ডারের তথ্য পাওয়া গিয়েছে।",
        data: dbRes
    });
});

// get customer's orders
const getCustomersOrders = catchAsync(async (req, res) => {
    const { customerId } = req.params;
    const dbRes = await orderServices.getCustomersOrdersFromDB(customerId);

    if (!dbRes) {
        return res.status(httpStatus.NOT_FOUND).json({
            success: false,
            message: "অর্ডার পাওয়া যায়নি।"
        });
    }

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে অর্ডারের তথ্য পাওয়া গিয়েছে।",
        data: dbRes
    });
});

// update payment status
const updatePaymentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await orderServices.updatePaymentStatusIntoDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "সফলভাবে পরিশোধিত হিসেবে চিহ্নিত করা হয়েছে।",
        data: dbRes
    });
});

// delete order
const deleteOrder = catchAsync(async (req, res) => {
    const { id } = req.params;
    const dbRes = await orderServices.deleteOrderFromDB(id);

    res.status(httpStatus.OK).json({
        success: true,
        message: "অর্ডারের তথ্য সফলভাবে ডিলিট হয়েছে।",
        data: dbRes
    });
});

export const orderControllers = {
    createOrder,
    getAllOrders,
    getCustomersOrders,
    updatePaymentStatus,
    deleteOrder
};
