import { z } from "zod";

const orderValidationSchema = z.object({
    body: z.object({
        productId: z.string({
            required_error: "Product ID is required",
        }),
        customerId: z.string({
            required_error: "Customer ID is required",
        }),
        quantity: z.number({
            required_error: "Quantity is required",
        }).min(1, {
            message: "Quantity must be at least 1"
        }),
        totalPrice: z.number({
            required_error: "Total price is required",
        }),
    })
});

export const orderValidations = {
    orderValidationSchema,
};
