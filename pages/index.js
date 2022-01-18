import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
      </Head>
      <amp-analytics config="https://www.googletagmanager.com/amp.json?id=GTM-NR8C452&gtm.url=SOURCE_URL" data-credentials="include"></amp-analytics>
      <amp-analytics id="amp-gtm-googleanalytics" type="googleanalytics" data-credentials="include">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: `{
                "vars": {
                  "account":"UA-151629277-1"
                },
                "triggers": {
                  "button": {
                    "selector": "#the-button",
                    "on": "click",
                    "vars": {
                      "event_name": "login",
                      "method": "Google"
                    }
                  }
                }
              }`
            }}
          />
        </amp-analytics>
      <main>
        <Header title="Welcome to my app!" />
        {  useAmp() ? (
          <p id="the-button">This is the <strong>AMP</strong> version of the home page</p>
        ) : (
          <p>This is the main version of the home page</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
