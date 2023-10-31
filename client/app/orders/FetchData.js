import buildClient from '../../api/build-client'

export default async function FetchData() {
    const user = await buildClient().get('/api/users/currentuser')
    const orders = await buildClient().get('/api/orders')

    console.log(orders.data)

    
    return (
        <>  
            <ul>{
                orders.data.map(order => {
                    return (
                        <li key={order.id}>
                            {order.ticket.title} - {order.status}
                        </li>
                    )
            })
            }

            </ul>
            
        </>
    )

}