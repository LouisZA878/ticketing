import { Listener, OrderCreatedEvent, Subjects } from '@sakosaticket/common'
import { queueGroupName } from './queue-group-name'
import { Message } from 'node-nats-streaming'
import { expirationQueue } from '../queues/expiration-queue'


export class OrderCreatedListener  extends Listener<OrderCreatedEvent> {
    subject: Subjects.OrderCreated = Subjects.OrderCreated

    queueGroupName = queueGroupName

    async onMessage(data: OrderCreatedEvent['data'], msg: Message){
        const delay = new Date(data.expiresAt).getTime() - new Date().getTime()
        console.log('waiting this may mili to process', delay)

        
        await expirationQueue.add({
            orderId: data.id
        }, {
            delay: delay
            // or just delay
        })

        msg.ack()
    }
 }