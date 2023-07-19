import { options } from '@/app/api/auth/[...nextauth]/options'
import { siteConfig } from '@/config/site'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { NavLinks } from './NavLinks'

export const Header = async () => {
  const session = await getServerSession(options)

  return (
    <header className="mx-8 py-8 animate-in fade-in zoom-in slide-in-from-top-8 duration-700">
      <div className="navbar bg-base-100 rounded-xl">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Pjh
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <NavLinks links={siteConfig.mainLinks} session={session} />
          </ul>
        </div>
      </div>
    </header>
  )
}
