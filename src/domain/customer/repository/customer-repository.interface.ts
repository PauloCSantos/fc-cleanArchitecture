import Customer from "../entity/customer";
import RepositoyInterface from "../../@shared/event/repository/repository.interface";

export default interface CustomerRepositoryInterface extends RepositoyInterface<Customer> {}