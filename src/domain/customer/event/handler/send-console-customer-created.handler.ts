import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../../../customer/event/customer-created.event";

export default class SendConsoleCustomerCreatedHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    this.handle1();
    this.handle2();
  }
  handle1(): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
  handle2(): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
