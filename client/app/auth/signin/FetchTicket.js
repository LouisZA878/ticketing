import buildClient from '../../../api/build-client'


export async function FetchTicket({params}) {
    const tickets = await buildClient().get(`/api/tickets/${params.ticketId}`)
    return tickets
}