'use client'

import useRequest from '../../../hooks/use-request'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
    const router = useRouter()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doRequest, error } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email, password
        },
        onSuccess:() => router.push('/')
    })

    const onSubmit = async (e) => {
        e.preventDefault()

        await doRequest()

    }

  return (
    <form onSubmit={onSubmit}>
        <h1>Sign In</h1>

        <div className="form-group">
            <label> Email Address </label>
            <input value={email}
            className="form-control" 
            onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label> Password </label>
            <input type="password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
        </div>

            {error}
            
        <button className="btn btn-primary">Sign In</button>
    </form>
  )
}
