import express, { Request, Response } from 'express'
import { Ticket } from '../models/ticket'
import { 
    NotFoundError,
    validateRequest,
    requireAuth,
    NotAuthorizedError,
    BadRequestError
    } from '@sakosaticket/common'
import { body } from 'express-validator'
import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher'
import { natsWrapper } from '../nats-wrapper'

const router = express.Router()

router.put('/api/tickets/:id', 
    requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('Title is required'),
        body('price')
            .isFloat({ gt: 0 })
            .withMessage('Price must be provided and must be greater than 0'),
        
    ],
async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id)
    const { title, price } = req.body

    if(!ticket) {
        throw new NotFoundError()
    }

    if(ticket.orderId) {
        throw new BadRequestError('Cannot edit a reserved ticket')
    }

    if(ticket.userId !== req.currentUser!.id){
        throw new NotAuthorizedError()
    }
    ticket.set({
        title,
        price
      });
      await ticket.save();
      new TicketUpdatedPublisher(natsWrapper.client).publish({
        id: ticket.id,
        version: ticket.version,
        title: ticket.title,
        price: ticket.price,
        userId: ticket.userId
      })



    res.send(ticket)
})

export { router as updateTicketRouter }