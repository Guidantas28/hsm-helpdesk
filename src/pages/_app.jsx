import { SessionProvider } from 'next-auth/react';
import '../app/globals.css'
import Root from '@/components/RootLayout';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
    <Root>
        <Component {...pageProps} />
    </Root>
    </SessionProvider>
  );
}

export default MyApp;