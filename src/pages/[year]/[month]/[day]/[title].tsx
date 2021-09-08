import Head from 'next/head'
import Link from 'next/link'

import { Thing } from '../../../../@types/things'
import { Layout } from '../../../../components/Layout'
import { formatDate } from '../../../../lib/formatDate'
import { getPaths } from '../../../../lib/getPaths'
import { getThings } from '../../../../lib/getThings'

interface Props {
  thing: Thing
}

export default function Component({ thing }: Props) {
  return (
    <Layout>
      <Head>
        <title>{thing.title} - Thomathings</title>
      </Head>
      <Link href={thing.url}>
        <a
          className="text-3xl text-blue-300"
          target="_blank"
          rel="nooperner noreferrer"
        >
          {thing.title}
        </a>
      </Link>
      <p className="mt-2 text-sm">{formatDate(thing.date)}</p>
      <div className="mt-4">
        Tags:{' '}
        {thing.tags.flatMap((tag) => (
          <span key="tag" className="ml-3">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <Link href={thing.url}>
          <a
            className="text-blue-300"
            target="_blank"
            rel="nooperner noreferrer"
          >
            {thing.url}
          </a>
        </Link>
      </div>
      <p className="mt-1 text-xl">{thing.description}</p>
    </Layout>
  )
}

export function getStaticPaths() {
  const paths = getPaths()

  return {
    paths,
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  const things = getThings()
  const thing = things.find(
    (thing) => thing.title.replaceAll(' ', '-') === params.title,
  )

  return {
    props: {
      thing,
    },
  }
}
