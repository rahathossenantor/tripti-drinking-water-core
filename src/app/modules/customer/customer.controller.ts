import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { customerServices } from "./customer.service";

// create customer
const createCustomer = catchAsync(async (req, res) => {
    const dbRes = await customerServices.createCustomerIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Customer has registered successfully.",
        data: dbRes
    });
});

export const customerControllers = {
    createCustomer,
};
