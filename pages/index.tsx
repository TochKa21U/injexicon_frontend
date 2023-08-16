import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500'>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    </div>
  </Layout>
)

export default IndexPage
