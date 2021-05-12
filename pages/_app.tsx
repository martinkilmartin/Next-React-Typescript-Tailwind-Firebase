import type { AppProps, NextWebVitalsMetric } from 'next/app'

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const body = JSON.stringify(metric)
  console.log(JSON.parse(body))
  //const url = 'https://example.com/analytics'

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  //if (navigator.sendBeacon) {
  //  navigator.sendBeacon(url, body)
  //} else {
  //  fetch(url, { body, method: 'POST', keepalive: true })
  //}
}

export default MyApp
