import { getSession } from 'next-auth/react';

export default function Home() {

}

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session || !session.user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
  
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }