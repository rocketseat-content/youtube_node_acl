import { Request, Response } from "express";
import { CreateRolePermissionService } from "../services/CreateRolePermissionService";

export class CreateRolePermissionController {
  async handle(request: Request, response: Response) {
    const { roleId } = request.params;
    const { permissions } = request.body;

    const createRolePermissionService = new CreateRolePermissionService();

    const result = await createRolePermissionService.execute({
      roleId,
      permissions,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
