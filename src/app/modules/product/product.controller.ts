import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";

// create product
const createProduct = catchAsync(async (req, res) => {
    const dbRes = await productServices.createProductIntoDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        message: "Product has been created successfully.",
        data: dbRes
    });
});

export const productControllers = {
    createProduct,
};
