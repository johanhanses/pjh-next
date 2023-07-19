'use client'

import { SiteConfig } from '@/config/site'
import { Session } from 'next-auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinksProps {
  links: SiteConfig['mainLinks']
  session: Session | null
}

export const NavLinks = ({ links, session }: NavLinksProps) => {
  const currentRoute = usePathname()

  return (
    <>
      {links
        .filter((link) => (session?.user ? link.title !== 'Log in' : link.title !== 'Log out'))
        .map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                currentRoute === link.href ? 'bg-stone-200 dark:bg-stone-700' : 'bg-transparent'
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
    </>
  )
}
