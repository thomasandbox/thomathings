import Head from 'next/head'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Head>
        <meta name="og:title" content="Thomathings" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Link href="/">
          <a className="text-2xl">Thomathings</a>
        </Link>
      </header>
      <main className="mt-16">{children}</main>
    </>
  )
}
