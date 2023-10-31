import FetchTicket from './FetchTicket'
import Client from './Client'


async function TicketShow({params}) {
    
    

    return (
        <>
            <Client pageParams={params.ticketId}>
                <FetchTicket pageParams={params.ticketId} />
            </Client>
        </>
    )
}

export default TicketShow