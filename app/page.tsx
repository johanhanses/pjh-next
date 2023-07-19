import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      <h1 className="mb-8 text-xl">Tjena</h1>
      {session ? <p>You are logged in as {session?.user?.name}</p> : <p>You are not logged in</p>}
    </>
  )
}
