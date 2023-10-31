'use client'

import useRequest from '../../../hooks/use-request'

export function Client({ children }) {
    const { doRequest, errors } = useRequest({
        url: '/api/orders',
        method: 'post',
        body: {
            ticketId: tickets.id
        },
        onSuccess: (order) => console.log(order)
    })
    console.log(children)

    
        // <div>
        //     <h1>{tickets.title}</h1>
        //     <h4>Price: {tickets.price}</h4>
        //     {errors}
        //     <button 
        //         onClick={doRequest}
        //         className='btn btn-primary'
        //     >Purchase</button> 
        // </div>
         
    
    
}



