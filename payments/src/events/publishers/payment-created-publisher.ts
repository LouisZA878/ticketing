import { Subjects, Publisher, PaymentCreatedEvent } from '@sakosaticket/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    subject: Subjects.PaymentCreated = Subjects.PaymentCreated


}


