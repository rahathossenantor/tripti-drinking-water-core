import { z } from "zod";

const customerCreationValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required"
        }).min(3, "Name must be at least 3 characters long"),
        email: z.string().optional(),
        phone: z.string({
            required_error: "Phone number is required",
        }).min(11, "Phone number must be at least 11 characters long"),
        productPrice: z.number({
            required_error: "Product price is required",
        }),
        deliveryAddress: z.string({
            required_error: "Delivery address is required",
        }),
        customerType: z.enum(["Residential", "Business"], {
            required_error: "Customer type is required",
        }),
        serviceType: z.enum(["Daily", "Weekly", "Monthly"], {
            required_error: "Service type is required",
        }),
    })
});

const customerUpdateValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        productPrice: z.number().optional(),
        deliveryAddress: z.string().optional(),
        customerType: z.enum(["Residential", "Business"]).optional(),
        serviceType: z.enum(["Daily", "Weekly", "Monthly"]).optional(),
    })
});

export const customerValidations = {
    customerCreationValidationSchema,
    customerUpdateValidationSchema
};
