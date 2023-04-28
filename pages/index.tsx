
import { Inter } from 'next/font/google'
import Dashford from './dashford'
import Orders from './orders'
import Layout from '../components/layout'

import SideMenu from '../components/sidemenu'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Dashford/>
      </Layout>
      
    </>
    
  )
}
