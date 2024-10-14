import type { AppProps } from 'next/app';
import { CompanyProvider } from '../context/CompanyProvider';
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import 'primereact/resources/themes/lara-dark-blue'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';                 // Estilos básicos de PrimeReact
import 'primeicons/primeicons.css';    
import   '../styles/globals.css'; // Tus estilos personalizados

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
      <CompanyProvider>
        <Component {...pageProps} />
      </CompanyProvider>
   

  );
}

export default MyApp;
