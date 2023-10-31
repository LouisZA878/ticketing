import  express, { Request, Response }  from "express";
import { json } from 'body-parser'
import 'express-async-errors'
import cookieSession from 'cookie-session'

import { errorHandler, NotFoundError, currentUser } from '@sakosaticket/common'
import { createChargeRouter } from './routes/new'


const app = express();
app.set('trust proxy', true)
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
  })
)



app.use(currentUser)

app.use(createChargeRouter)






app.all('*', async (req: Request, res: Response) => {
  throw new NotFoundError();

  console.log('This route is not in use')
});

app.use(errorHandler);


export { app }