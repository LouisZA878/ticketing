import FetchData from './FetchData'
import Client from './Client'
import buildClient from '../../../api/build-client'

export default async function OrderShow({ params }) {


    return (
        <>
            <Client pageParams={params.orderId}>
                <FetchData pageParams={params.orderId} />
            </Client>
            
        </>
    )


}