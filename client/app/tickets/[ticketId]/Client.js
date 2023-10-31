'use client'

import { useRouter } from 'next/navigation'
import useRequest from '../../../hooks/use-request'

export default function Client({ children, pageParams }) {
    const router = useRouter()
    const { doRequest, errors } = useRequest({
        url: '/api/orders',
        method: 'post',
        body: {
            ticketId: pageParams
        },
        onSuccess: (order) => router.push(`/orders/${order.id}`)
    })
    console.log(pageParams)
    
    return (
        <div>
            {children}
            <button 
                 onClick={() => doRequest()}
                 className='btn btn-primary'
             >Purchase</button> 
            {errors}
        </div>
    )
}



