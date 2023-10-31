import request from 'supertest'
import { app } from '../../app'

it('return a 201 on succesful signup', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            email: "test@test.com",
            password: 'password'
        })
        .expect(201)
})

it('returns a 400 with an invalid password or email', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "teestcom",
            password: '1rererer'
        })
        .expect(400)
    await request(app)
        .post('/api/users/signup')
        .send({
            email: "te@testcom",
            password: '1'
        })
        .expect(400)
})
it('returns a 400 with a missing password and email', async () => {
    return request(app)
        .post('/api/users/signup')
        .send({
            // email: "tetestcom",
            // password: '1'
        })
        .expect(400)
})

it('disallows duplicate emails', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(201)
    
    await request(app)
        .post('/api/users/signup')
        .send({
            email: 'test@test.com',
            password: 'password'
        })
        .expect(400)
})

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
    .post('/api/users/signup')
    .send({
        email: 'test@test.com',
        password: 'password'
    })
    .expect(201)

    expect(response.get('Set-Cookie')).toBeDefined()

})