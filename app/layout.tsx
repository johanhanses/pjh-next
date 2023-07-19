import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pjh',
  description: 'A mega fiskface',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-red-500`}>
        <header className="mx-4 py-2">
          <div className="navbar bg-base-100 rounded-xl">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Link</a>
                </li>
                <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <main className="flex min-h-screen flex-col items-center p-24">{children}</main>
      </body>
    </html>
  )
}
