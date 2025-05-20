import { NextFunction, Request, Response, Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogValidations } from "./customer.validation";
import { blogControllers } from "./customer.controller";
import { upload } from "../../utils/uploadImage";

const router = Router();

router.post(
    "/",
    upload.single("file"),
    (req: Request, _res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        req.body.image = "";

        next();
    },
    validateRequest(
        blogValidations.blogCreationValidationSchema
    ),
    blogControllers.createBlog
);

export const blogRoutes = router;
