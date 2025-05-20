import { z } from "zod";

const blogCreationValidationSchema = z.object({
    body: z.object({
        title: z.string(),
        description: z.string(),
        article: z.string(),
        category: z.string(),
        image: z.string().optional(),
    })
});

export const blogValidations = {
    blogCreationValidationSchema,
};
