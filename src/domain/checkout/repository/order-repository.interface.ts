import RepositoyInterface from "../../@shared/event/repository/repository.interface";
import Order from "../entity/order";

export default interface OrderRepositoryInterface
  extends RepositoyInterface<Order> {}
