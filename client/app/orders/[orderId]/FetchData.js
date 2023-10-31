import buildClient from '../../../api/build-client'


export default async function FetchTicket({ pageParams }) {
    const orders = await buildClient().get(`/api/orders/${pageParams}`)
    const msLeft = new Date(orders.data.expiresAt).getTime() - new Date().getTime()
    const time = msLeft / 1000 / 60


    return (
        <div>
            { 
                time >= 0 && `${time} minutes until expired`
            }

            
        </div>
    )

}