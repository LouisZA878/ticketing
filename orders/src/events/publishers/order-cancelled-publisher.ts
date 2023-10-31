import  { Publisher, OrderCancelledEvent, Subjects } from '@sakosaticket/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}

