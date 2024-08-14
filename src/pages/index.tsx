import { useRef, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Login from '@components/Auth/signIn';
import { withSSRAuth } from '@middlewares/auth';

import styles from './styles.module.css';

export default function Application(): JSX.Element {
  const container = useRef<any | null>(null);
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        (async () => {
          const { Install } = await import('@libs/worker/install');
          new Install(document.querySelector('#install'));
        })();  
      });

      // @ts-ignore
      if ('serviceWorker' in navigator && window?.workbox !== undefined) {
        // @ts-ignore
        const wb = window?.workbox;

        window.addEventListener('load', () => {
          (async () => {
            try {
              if (process.env.NODE_ENV !== 'development') {
                wb.addEventListener('installed', (event) => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                wb.addEventListener('controlling', (event) => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                wb.addEventListener('activated', (event) => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                const promptNewVersionAvailable = (event) => {
                  // `event.wasWaitingBeforeRegister` será false se esta for a primeira vez que o service worker atualizado está esperando.
                  // Quando `event.wasWaitingBeforeRegister` é verdadeiro, um service worker atualizado anteriormente ainda está esperando.
                  // Você pode querer personalizar o prompt da interface do usuário de acordo.
                  if (confirm('Uma versão mais recente deste aplicativo da web está disponível, recarregar para atualizar?')) {
                    wb.addEventListener('controlling', (event) => {
                      window.location.reload()
                    })
        
                    // Envia uma mensagem para o service worker em espera, instruindo-o a ativar.
                    wb.messageSkipWaiting()
                  } else {
                    console.log(
                      'O usuário rejeitou o recarregamento do aplicativo da Web. Continue usando a versão antiga. A nova versão será carregada automaticamente quando o usuário abrir o aplicativo na próxima vez.'
                    )
                  }
                }
        
                wb.addEventListener('waiting', promptNewVersionAvailable)
        
                wb.addEventListener('message', (event) => {
                  if (event.data && event.data.type === 'SKIP_WAITING') {
                    // @ts-ignore
                    self?.skipWaiting();
                  }

                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                wb.addEventListener('redundant', event => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                wb.addEventListener('externalinstalled', event => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
        
                wb.addEventListener('externalactivated', event => {
                  console.log(`Event ${event.type} is triggered.`)
                  console.log(event)
                })
               
                const register = await wb.register();

                if(register) {
                  if (navigator.storage && navigator.storage.persist) {
                    const result = await navigator.storage.persist();
                    console.log(`Data persisted: ${result}`);
                  }
                }
              } 
            } catch (err) {
              console.log('😥 Falha no registro do Service worker: ', err);
            }  
          })(); 
        });
      }
    }
  }, []);
  
  return (
    <div ref={container} className={styles.container}>
      <Login src={container} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async (context) => {
  return {
    props: {},
  };
});