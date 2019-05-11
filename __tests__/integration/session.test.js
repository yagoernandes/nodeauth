const { User } = require('../../src/app/models')

describe('Authentication', () => {
   // it('should receive JWT token when authenticated with valid credentials.', () => {

   // });
   it('should create a user correctly.', async () => {
      console.log('---------------- ENVIRONMENT: ', process.env)
      const user = await User.create({
         name: 'Yago',
         email: 'teste@gmail.com',
         password_hash: '123123123123'
      })
      expect(user.email).toBe('teste@gmail.com')
   });
})