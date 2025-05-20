import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidations } from "./product.validation";
import { productControllers } from "./product.controller";

const router = Router();

router.post(
    "/",
    validateRequest(
        productValidations.productValidationSchema
    ),
    productControllers.createProduct
);

export const productRoutes = router;
