import { Publisher, Subjects, TicketUpdatedEvent } from '@sakosaticket/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    // subject: type annotation = actual data
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;


}

