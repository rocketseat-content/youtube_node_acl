import { Request, Response } from "express";
import { CreateProductsService } from "../services/CreateProductsService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;

    const createProductService = new CreateProductsService();

    const product = await createProductService.execute({
      name,
      description,
      price,
    });

    return response.json(product);
  }
}
