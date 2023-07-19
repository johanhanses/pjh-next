import Link from 'next/link'

export default function Admin() {
  return (
    <>
      Admin
      <Link href="/" className="underline text-blue-500">
        Home
      </Link>
    </>
  )
}
