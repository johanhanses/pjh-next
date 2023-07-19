import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options'

export default async function Home() {
  const session = await getServerSession(options)
  console.log(session)

  return (
    <>
      <h1 className="mb-8 text-xl">Tjena</h1>

      {session ? (
        <p>
          You are logged in{' '}
          <Link href="/api/auth/signout" className="underline text-blue-500">
            Log out
          </Link>
        </p>
      ) : (
        <p>
          You are not logged in{' '}
          <Link href="/api/auth/signin" className="underline text-blue-500">
            Log in
          </Link>
        </p>
      )}
    </>
  )
}
