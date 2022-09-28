import RepositoyInterface from "../../@shared/event/repository/repository.interface";
import Product from "../entity/product";

export default interface ProductRepositoryInterface
  extends RepositoyInterface<Product> {}
