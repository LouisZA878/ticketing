import buildClient from '../../../api/build-client'

export default async function FetchTicket({ pageParams }) {
    const tickets = await buildClient().get(`/api/tickets/${pageParams}`)
    console.log(tickets)
    return (
        <div>
             <h1>Title: {tickets.data.title}</h1>
             <h4>Price: {tickets.data.price}</h4>
         </div>
    )

}