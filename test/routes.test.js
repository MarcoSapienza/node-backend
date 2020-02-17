const request = require('supertest')
const app = require('../bin/www')
describe('Post Endpoints', () => {
    it('should create a new post', async () => {
        const res = await request(app)
            .post('/api/posts')
            .send({
                userId: 1,
                title: 'test is cool',
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    }),
        it('should get all posts', async () => {
            const res = await request(app)
                .get('/api/posts')
            expect(res.statusCode).toEqual(200)
            expect(res.body).toHaveProperty('posts')
        })
})
