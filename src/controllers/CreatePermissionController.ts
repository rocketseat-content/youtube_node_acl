import { Request, Response } from "express";
import { CreatePermissionService } from "../services/CreatePermissionService";

export class CreatePermissionController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createPermissionService = new CreatePermissionService();

    const result = await createPermissionService.execute({ name, description });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
