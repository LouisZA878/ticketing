import express, {Request,  Response} from 'express'
import jwt from 'jsonwebtoken'
import { body } from 'express-validator'
import { validateRequest, BadRequestError } from '@sakosaticket/common'

import { Password } from '../services/password'
import { User } from '../models/user'

const router = express.Router()

router.post('/api/users/signin', [
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password')
],
validateRequest,
    async (req: Request, res: Response) => {

    const { email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (!existingUser){
        throw new BadRequestError('invalid credentials')
    }

    const passwordsMatch = await Password.compare(
        existingUser.password,
        password
        )
        if (!passwordsMatch){
            throw new BadRequestError('invalid credentials')
        }

        // Generate JWT token
   const userJwt = jwt.sign({
    id: existingUser.id,
    email: existingUser.email
    },
    process.env.JWT_KEY!
    )
    // const userJwt = jwt.sign({
    //    id: user.id,
    //    email: user.email
    // }, 'asdf)

    // Store it on sesson object

    req.session = {
        jwt: userJwt
    }

    res.status(201).send(existingUser);

})

export { router as signinRouter}