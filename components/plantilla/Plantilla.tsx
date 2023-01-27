import { Navbar  } from './ui';
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactNode } from 'react';


interface PlantillaProps {
  children: ReactNode
  title?: string
}
 
export const Plantilla : NextPage<PlantillaProps>  = ( {children , title = 'Poquebolita' }) => {
 
  
 return ( <>


  <Head>
        <meta name="description" content="Descubre mas sobre el pokemon : XXX" />
        <meta name="author" content="El sapo pepe" />
        <title>{` ${title} `}</title>
  </Head>

    <Navbar />
    <main>
      {children}
    </main>
  </> );
}
 