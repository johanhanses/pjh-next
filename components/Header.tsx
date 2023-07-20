import Link from 'next/link'

export const Header = () => {
  return (
    <header className="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
      <Link href="mailto:johanhanses@gmail.com" className="hover:text-neutral-100">
        johanhanses@gmail.com
      </Link>

      <nav role="navigation">
        <ul role="list" className="flex flex-row gap-2">
          <li>
            <Link href="/" className="hover:text-neutral-100 text-neutral-100">
              Home
            </Link>
          </li>
          {/* <li>/</li> */}
        </ul>
      </nav>
    </header>
  )
}
