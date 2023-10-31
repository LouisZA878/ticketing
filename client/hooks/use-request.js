import axios from 'axios'
import { useState } from 'react'


export default function UseRequest({ url, method, body, onSuccess }) {
    const [error, setError] = useState(null)

    const doRequest = async () => {
        try {

            setError(null)
            const response = await axios[method](url, body)
            
            console.log(response.data)
            if(onSuccess){
                onSuccess(response.data)
            }

            return response.data
        } catch (err) {

            console.log(err, "error")
            setError(
                <div className='alert alert-danger'>
                <h4>Ooops...</h4>
                <ul className='my-0'>
                {err.response.data.errors.map(errr => errr.message)}
                </ul>
            </div>
            )
            throw err
        }
    }
    return { doRequest, error }
}