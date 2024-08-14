import { FC, useEffect, useState, useRef } from 'react';
import { OverlayProvider } from 'react-aria';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from '@components/nprogress';
import ResizeHandler from '@components/resize-handler';
import useNetworkStatus from '@libs/network';
import { AuthProvider } from '@contexts/providers/authProvider';
import { ThemeProvider } from 'next-themes'

import '@styles/global.css';
import '@styles/nprogress.css';
import '@styles/chrome-bug.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  
  const isOnline = useRef<any>();
  const [networkStatus, setNetworkStatus] = useState(true);

  const router = useRouter();

  function CallOnline() {
    isOnline.current = useNetworkStatus();
  }

  useEffect(() => {
    const updateNetworkStatus = () => {
      // @ts-ignore
      if (navigator.connection.effectiveType === "4g") {
        setNetworkStatus(true);
        document.body.classList.remove('offline');
      } else {
        setNetworkStatus(false);
        document.body.classList.add('offline'); // Adiciona a classe 'offline' ao elemento body
      }
    };

    const handleOnline = () => {
      console.log('Network status changed: online');
      setNetworkStatus(true);
      document.body.classList.remove('offline'); // Remove a classe 'offline' do elemento body
    }

    const handleOffline = () => {
      console.log('Network status changed: offline');
      setNetworkStatus(false);
      document.body.classList.add('offline'); // Adiciona a classe 'offline' ao elemento body
      document.body.title = "MODO OFFLINE"; // Adiciona a mensagem ao título do body
    }
  
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
      updateNetworkStatus();
      // @ts-ignore
      navigator.connection.addEventListener('change', updateNetworkStatus);
    } else {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }

    document.body.classList?.remove('loading');
  
    return () => {
      // @ts-ignore
      navigator.connection?.removeEventListener('change', updateNetworkStatus);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined && isOnline) {
      if (router.route !== '/') {
        // @ts-ignore
        const wb = window?.workbox;
        wb.active.then(worker => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [networkStatus, router.route])

  if (typeof window !== "undefined") {
    CallOnline();
  }

  return (
    <ThemeProvider>
      <OverlayProvider className='container'>
        <AuthProvider>
          <AnyComponent {...pageProps} />
        </AuthProvider>
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </ThemeProvider>
  );
}

export default App;
