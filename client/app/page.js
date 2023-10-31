import Image from 'next/image'
import styles from './page.module.css'


import buildClient from '../api/build-client'
import Link from 'next/link'

//  function LandingPage({ color }) {

//   console.log('i am in the component', color)
//   return (
//     <div>Hello2</div>
//   )
// }


// LandingPage.getInitialProps = async (ctx) => {
//   console.log('I am on the server!')

//   return {color: 'red'}
// }

// const GET = async (kubeUrl) => {
    // https://ingress-nginx-controller-admission.ingress-nginx.svc/networking/v1/ingresses


    // const headersObj = {};
    // const headersList = headers().forEach((header, key) => {
    //   //@ts-ignore
    //   headersObj[key] = header;
    // });
   
    // console.log("headersobj", headersObj)
    // // console.log("headersList", headersList)

    // const res = await axios
    //   .get(kubeUrl, {
    //     headers: headersObj,
    //   })
    //   .catch((err) => console.log(err));


    // return res;
  
  // const res = await axios.get(kubeUrl, {
  //     headers: {
  //       Host: 'ticketing.com'
  //     }
  //   }).catch((err) => {
  //   console.log(err.message)});

  // return res

// }

async function LandingPage() {

  const user = await buildClient().get('/api/users/currentuser')
  // console.log("looking", posts?.data)
  const tickets = await buildClient().get('/api/tickets')
  // console.log(tickets.data)
 
  return (

      <div>
        <h1>Tickets</h1>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {tickets.data.map(ticket => (
              <tr key={ticket.id}>
              <td>{ticket.title}</td>
              <td>{ticket.price}</td>
              <td>
                <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
                  View
                </Link>
              </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
  )
}

export default LandingPage