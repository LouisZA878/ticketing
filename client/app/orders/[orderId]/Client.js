'use client'
import useRequest from '../../../hooks/use-request'
import { useRouter } from 'next/navigation'

import { useEffect, useStart } from 'react'

export default function Client({ children, pageParams }){
    const router = useRouter()
    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: pageParams,
            token: 'tok_visa'
        },
        onSuccess: (payments) => router.push('/orders')
    })



    return (
        <>
            {children}
            {errors}
            <button 
            onClick={doRequest}>Purchase</button>
        </>
    )
}