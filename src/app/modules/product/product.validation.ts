import { z } from "zod";

const productValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Product name is required",
        }),
        price: z.number({
            required_error: "Product price is required",
        }),
        weight: z.number({
            required_error: "Product weight is required",
        }),
    })
});

export const productValidations = {
    productValidationSchema,
};
