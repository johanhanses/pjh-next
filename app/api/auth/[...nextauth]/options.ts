import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password', placeholder: 'password' },
      },
      async authorize(credentials) {
        const user = { id: 1, username: 'Johan', password: 'test' }

        if (credentials?.username === user.username && credentials?.password === user.password) {
          return user
        }
        return null
      },
    }),
  ],
  // pages: {
  //   signIn: '/auth/signin',
  // },
}
