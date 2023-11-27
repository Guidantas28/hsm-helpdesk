import { connect } from 'mongoose';
import Chamado from '@/models/Chamado';
import LayoutAdmin from '@/components/LayoutAdmin';
import DashboardComponent from '@/components/Dashboard';
import { useSession } from 'next-auth/react';

export default function DashboardPage({ chamados }) {
  const { status, data: session } = useSession();

  if (status !== "authenticated") {
    return null;
  }  
  return (
  <LayoutAdmin>
    <DashboardComponent chamados={chamados} />
  </LayoutAdmin>
  )
}

export async function getServerSideProps() {
   console.log('Dentro de getServerSideProps');
    try {
    await connect(process.env.MONGO);
    const chamados = await Chamado.find().lean();

    console.log(chamados)

    return {
      props: {
        chamados: JSON.parse(JSON.stringify(chamados)),
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados do MongoDB:', error);

    return {
      props: {
        chamados: [],
      },
    };
  }
}
