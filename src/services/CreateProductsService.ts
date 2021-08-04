import { ProductRepository } from "../repositories";

type ProductRequest = {
  name: string;
  description: string;
  price: number;
};

export class CreateProductsService {
  async execute({ name, description, price }: ProductRequest) {
    const product = ProductRepository().create({
      name,
      description,
      price,
    });

    await ProductRepository().save(product);

    return product;
  }
}
