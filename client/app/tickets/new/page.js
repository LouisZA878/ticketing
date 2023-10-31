'use client'

import Image from 'next/image'
import { useState } from 'react'
import  useRequest  from '../../../hooks/use-request'
import { useRouter } from 'next/navigation'

export default function CreateTicket() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const router = useRouter()
    const { doRequest, errors } = useRequest({
        url: '/api/tickets',
        method: 'post',
        body: {
            title, price
        },
        onSuccess:  () => router.push('/')
    })

    const onSubmit = (event) => {
        event.preventDefault()

        doRequest()
    }
    const onBlur = () => {
        const value = parseFloat(price)

        if(isNaN(value)) {
            return;
        }

        setPrice(value.toFixed(2))

    }
    return(
        <div>
            <h1>Create a Ticket</h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input
                        value={title}
                        className='form-control'
                        onChange={(e) => setTitle(e.target.value)}
                        />
                </div>
                <div className='form-group'>
                    <label>Price</label>
                    <input
                        value={price}
                        onBlur={onBlur}
                        onChange={(e) => setPrice(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                   {errors} 
                </div>
                <button className='btn btn-primary'>
                    Submit
                </button>
            </form>



        </div>
    )


}