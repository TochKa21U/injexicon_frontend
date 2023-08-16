import Link from 'next/link'
import Layout from '../../components/Layout'

const ChallangesPage = () => (
  <Layout title="Challanges Page">
    <h1>Challanges</h1>
    <p>
      <Link href="/challanges/fresh">Starting Fresh</Link>
    </p>
    <p>
      <Link href="/challanges/warden">Warden Challanges</Link>
    </p>
  </Layout>
)

export default ChallangesPage
