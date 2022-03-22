import '../styles/globals.css'
import AppProvider from '@/utils/provider'
import { useRouter } from "next/router"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const page = router.pathname;

  useEffect(()=>{
    if (!localStorage.getItem('token')) {
      router.push('/')
    } else if (localStorage.getItem('token') && page == '/settings'){

    }
    else {
      router.push('/stadium')
    }
  },[])

  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
