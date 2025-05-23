import { z } from "zod";

const orderValidationSchema = z.object({
    body: z.object({
        customer: z.string({
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
        paymentStatus: z.enum(["Due", "Paid"], {
            required_error: "Payment status is required",
        }),
    })
});

export const orderValidations = {
    orderValidationSchema,
};
