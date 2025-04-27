import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.router";
import { NoticeRoutes } from "../modules/hr/notice/notice.router";
import { DepartmentRoutes } from "../modules/hr/department/department.router";
import { EmailRoutes } from "../modules/hr/email-setup/email-setup.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/hr/notice",
    route: NoticeRoutes,
  },
  {
    path: "/hr/department",
    route: DepartmentRoutes,
  },
  {
    path: "/hr/email-setup",
    route: EmailRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
