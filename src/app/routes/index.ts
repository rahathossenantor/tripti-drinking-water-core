import { Router } from "express";
import { customerRoutes } from "../modules/customer/customer.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/customers",
        route: customerRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
