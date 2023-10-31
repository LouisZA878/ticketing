import { Publisher, Subjects, TicketCreatedEvent } from '@sakosaticket/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    // subject: type annotation = actual data
    subject: Subjects.TicketCreated = Subjects.TicketCreated;


}

