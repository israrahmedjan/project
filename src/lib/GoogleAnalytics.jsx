'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      {/* Load the gtag.js script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N03S465KCH"
        strategy="afterInteractive"
      />
      
      {/* Initialize Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N03S465KCH');
        `}
      </Script>
    </>
  );
}
