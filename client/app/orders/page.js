import FetchData from './FetchData'
import Client from './Client'

export default async function OrderIndex() {

    return (
        <>
            <Client>
                <FetchData />
            </Client>
        </>
    )
}

