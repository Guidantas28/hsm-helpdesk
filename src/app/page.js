import LayoutAdmin from '@/components/LayoutAdmin'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
   <LayoutAdmin>
     <Link href="/criarChamado">Chamados</Link>
   </LayoutAdmin>
  )
}
