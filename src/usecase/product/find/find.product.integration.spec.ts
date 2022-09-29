import { Sequelize } from "sequelize-typescript";
import Product from "../../../domain/product/entity/product";
import ProductModel from "../../../infrastructure/product/sequilize/product.model";
import ProductRepository from "../../../infrastructure/product/sequilize/product.repository";
import FindProductUseCase from "./find.product.usecase";

describe("Test find product use case", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    await sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a product", async () => {
    const product = new Product("123", "Product 1", 11.11);
    const productRepository = new ProductRepository();

    const usecase = new FindProductUseCase(productRepository);

    await productRepository.create(product);

    const input = {
      id: "123",
    };

    const output = {
      id: "123",
      name: "Product 1",
      price: 11.11,
    };

    const result = await usecase.execute(input);

    expect(result).toEqual(output);
  });
});
