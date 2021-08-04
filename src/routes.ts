import { Router } from "express";
import { CreatePermissionController } from "./controllers/CreatePermissionController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { CreateRolePermissionController } from "./controllers/CreateRolePermissionController";
import { CreateUserAccessControlListController } from "./controllers/CreateUserAccessControlListController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllProductsController } from "./controllers/GetAllProductsController";
import { SessionController } from "./controllers/SessionController";
import { ensuredAuthenticated } from "./middleware/ensuredAuthenticated";
import { can, is } from "./middleware/permissions";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.post("/login", new SessionController().handle);

routes.get("/products", new GetAllProductsController().handle);
routes.post(
  "/products",
  ensuredAuthenticated(),
  can(["create_product", "list_product"]),
  new CreateProductController().handle
);

routes.post(
  "/roles",
  ensuredAuthenticated(),
  is(["admin"]),
  new CreateRoleController().handle
);

routes.post(
  "/permissions",
  ensuredAuthenticated(),
  new CreatePermissionController().handle
);

routes.post(
  "/users/acl",
  ensuredAuthenticated(),
  new CreateUserAccessControlListController().handle
);

routes.post("/roles/:roleId", new CreateRolePermissionController().handle);

export { routes };
