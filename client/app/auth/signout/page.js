
import useRequest from '../../../hooks/use-request'
import { useRouter } from 'next/navigation'

export default () => {
    const router = useRouter()

    const { doRequest } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => router.push('/')
    })

    useEffect(() => {
        doRequest()
    }, [])


    return <div>Signing you out</div>
}