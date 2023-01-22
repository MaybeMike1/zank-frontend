import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        let user
        const res = await fetch('http://localhost:3000/api/auth/login')
        const data = await res.json()
        if (data && data.user) {
          user = data.user
        }
        if (user) {
          return Promise.resolve(user)
        }
        return Promise.resolve(null)
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ user ,session, token }) => {
      if(token && user){
        session.user = user
      }
      return session
    },
  },
  secret: '',
  jwt: {
    secret: '',
  },
})
