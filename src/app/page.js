import LayoutAdmin from '@/components/LayoutAdmin'
import Link from 'next/link'
import Image from 'next/image'
import Dashboard from '@/components/Dashboard'

export default function Home({chamados}) {
  return (
   <LayoutAdmin>
     <Dashboard />
   </LayoutAdmin>
  )
}

