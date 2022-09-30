import RepositoyInterface from "../../@shared/repository/repository.interface";
import Product from "../entity/product";

export default interface ProductRepositoryInterface
  extends RepositoyInterface<Product> {}
