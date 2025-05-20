import { Router } from "express";
import { customerRoutes } from "../modules/customer/customer.route";
import { orderRoutes } from "../modules/order/order.route";

const router = Router();

const moduleRoutes = [
    {
        path: "/customers",
        route: customerRoutes
    },
    {
        path: "/orders",
        route: orderRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
