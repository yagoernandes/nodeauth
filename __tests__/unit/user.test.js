const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')
const truncate = require('../utils/truncate')

describe('User', () => {
   beforeEach(async () => {
      await truncate()
   })

   it('should encrypt user password', async () => {
      const user = await User.create({
         name: 'Yago',
         email: 'testante@gmail.com',
         password: 'teste123'
      })

      const hash = await bcrypt.hash('teste123', 8)

      const compareHash = await bcrypt.compare('teste123', user.password_hash)

      expect(compareHash).toBe(true)
   })
})