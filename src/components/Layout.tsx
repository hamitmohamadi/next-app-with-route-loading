import {ReactNode} from "react";
// Next.js
import Head from 'next/head'
import dynamic from 'next/dynamic'
// Project imports
const Header = dynamic(() => import('./Header'))

//======================|| Main Layout ||===========================

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Magnificent</title>
            </Head>
            <style jsx global>{`
              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }

              body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              .container {
                padding: 1rem 10rem 10rem 1rem;
              }

              #nprogress .bar {
                background: white !important;
                height: 4px !important;
              }

              #nprogress .peg {
                box-shadow: 0 0 10px rgba(243, 242, 240, 0.49), 0 0 5px #d2d2d1;
              }
            `}</style>
            <Header/>
            <div className={'container'}>{children}</div>
        </>
    )
}