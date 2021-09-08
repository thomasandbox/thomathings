import Head from 'next/head'
import Link from 'next/link'

import { Thing } from '../@types/things'
import { Layout } from '../components/Layout'
import { formatDate } from '../lib/formatDate'
import { getDate } from '../lib/getDate'
import { getThings } from '../lib/getThings'

interface Props {
  things: Thing[]
}

export default function Index({ things }: Props) {
  return (
    <Layout>
      <Head>
        <title>Thomathings</title>
      </Head>
      <ul>
        {things.flatMap((thing) => {
          const date = getDate(thing.date)

          return (
            <li className="first:mt-0 mt-10" key={thing.title}>
              <p className="text-sm">{formatDate(thing.date)}</p>
              <Link
                href={`/${date.year}/${date.month}/${
                  date.day
                }/${thing.title.replaceAll(' ', '-')}`}
              >
                <a className="text-3xl text-blue-300">{thing.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export function getStaticProps() {
  const things = getThings()

  return {
    props: {
      things,
    },
  }
}
