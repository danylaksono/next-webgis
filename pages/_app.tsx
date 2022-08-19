import type { AppProps } from 'next/app'

import "../styles/globals.css";
import 'maplibre-gl-opacity/dist/maplibre-gl-opacity.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
