import { prisma } from '@/app/lib/database'
import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
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
        // const user = { id: 1, username: 'Johan', password: 'test' }
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        })

        // if (credentials?.username === user.username && credentials?.password === user.password) {
        //   return user
        // }

        if (user && bcrypt.compareSync(credentials!.password, user.passwordHash)) {
          return {
            id: user.id,
            username: user.username,
          } as any
        }
        return null
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      let dbUser
      if (token.user) {
        dbUser = await prisma.user.findFirst({
          where: {
            username: (token.user as User).username,
          },
        })
      }

      if (!dbUser) {
        token.user = user
        return token
      }

      return {
        name: dbUser.username,
        email: null,
        image: null,
      }
    },
    session: ({ session, token }) => {
      if (token && session) session.user = { name: token.name }

      return session
    },
  },

  // pages: {
  //   signIn: '/auth/signin',
  // },
}
