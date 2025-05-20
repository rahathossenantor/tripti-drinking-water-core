import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidations } from "./customer.validation";
import { customerControllers } from "./customer.controller";

const router = Router();

router.post(
    "/",
    validateRequest(
        customerValidations.customerCreationValidationSchema
    ),
    customerControllers.createCustomer
);

export const customerRoutes = router;
