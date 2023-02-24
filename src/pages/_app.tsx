import {useEffect} from "react";
import dynamic from "next/dynamic";
import type {AppProps} from 'next/app'
import {useRouter} from "next/router";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const Layout = dynamic(() => import('@/components/Layout'))

NProgress.configure({showSpinner: false});

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()

    useEffect(() => {
        const handleStart = (url: string) => {
            console.log(`Loading: ${url}`)
            NProgress.start()
        }

        const handleStop = () => {
            NProgress.done()
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    return <Layout><Component {...pageProps} /></Layout>
}
