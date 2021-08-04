import { Request, Response } from "express";
import { GetAllProductsService } from "../services/GetAllProductsService";

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const getAllProductsService = new GetAllProductsService();

    const products = await getAllProductsService.execute();

    return response.json(products);
  }
}
