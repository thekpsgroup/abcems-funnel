import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { prisma } from "./prisma"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authOptions: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    session: async ({ session, token }: { session: { user?: { id?: string; role?: string } }; token: { sub?: string } }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub
        // Get user role from database
        const user = await prisma.user.findUnique({
          where: { id: token.sub },
          select: { role: true }
        })
        session.user.role = user?.role || "LEARNER"
      }
      return session
    },
    jwt: async ({ user, token }: { user?: { id: string }; token: { uid?: string } }) => {
      if (user) {
        token.uid = user.id
      }
      return token
    },
  },
  session: {
    strategy: "jwt" as const,
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
}
