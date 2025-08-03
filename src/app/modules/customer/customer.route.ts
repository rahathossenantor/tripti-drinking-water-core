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

router.get(
    "/",
    customerControllers.getAllCustomers
);

router.get(
    "/:id",
    customerControllers.getSingleCustomer
);

router.patch(
    "/:id",
    validateRequest(
        customerValidations.customerUpdateValidationSchema
    ),
    customerControllers.updateCustomer
);

router.delete(
    "/:id",
    customerControllers.deleteCustomer
);

export const customerRoutes = router;
