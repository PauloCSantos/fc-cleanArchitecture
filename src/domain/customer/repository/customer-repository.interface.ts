import Customer from "../entity/customer";
import RepositoyInterface from "../../@shared/repository/repository.interface";

export default interface CustomerRepositoryInterface extends RepositoyInterface<Customer> {}