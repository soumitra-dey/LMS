import Navbar from '@/components/Navbar'
import PrivateRoutes from '@/components/PrivateRoutes'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  

  return <>
    <Provider store={store}>
      <ChakraProvider>
        <PrivateRoutes>
          <Navbar />
          <Component {...pageProps} />
        </PrivateRoutes>
      </ChakraProvider>
    </Provider>
  </>
}
