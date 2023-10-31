import Link from 'next/link'
import buildClient from '../api/build-client'



export default async () => {

    const client = await buildClient().get('/api/users/currentuser')
    const { data } = client
    const user = data.currentUser
    // console.log("looking", client?.data)

    const links = [
        !user && { label: 'Sign Up', href: '/auth/signup'},
        !user && { label: 'Sign In', href: '/auth/signin'},
        user && { label: 'Sell Tickets', href: '/tickets/new'},
        user && { label: 'My Orders', href: '/orders'},
        user && { label: 'Sign Out', href: '/auth/signout'}
    ].filter(linkConfig => linkConfig)
    .map(({ label, href}) => {
        return <li key={href} className='nav-item'>
            <Link href={href} className='nav-link'>
                {label}
            </Link>
        </li>
    })

    return (
        <nav className="bg-light navbar navbar-light">
            <Link href="/" className="navbar-brand">
                GitTix
            </Link>

            <div className='d-flex justify-content-end'>
                <ul className='align-items-center d-flex nav'>
                { links }
                </ul>
            </div>
        </nav>
    )
}