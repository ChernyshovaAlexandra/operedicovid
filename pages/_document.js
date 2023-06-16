import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name='description' content='Вакцинация является важной опцией профилактики коронавирусной инфекции, однако не всегда она обеспечивает необходимую защиту. Люди со сниженным иммунитетом могут нуждаться в дополнительной защите от COVID-19' />
        <link rel="alternate icon" type="image/png" href="./favicon.png" />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />

        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <meta name="theme-color" content="#fff" />
        <meta data-hid="og:url" property="og:url" content='https://operedicovid.ru/' />
        <meta data-hid="og:type" property="og:type" content="website" />
        <meta data-hid="og:image" property="og:image" content='./banner.png' />
        <meta data-hid="og:title" property="og:title" content='Пассивная иммунизация' />
        <meta data-hid="og:description" property="og:description" content='Вакцинация является важной опцией профилактики коронавирусной инфекции, однако не всегда она обеспечивает необходимую защиту. Люди со сниженным иммунитетом могут нуждаться в дополнительной защите от COVID-19' />
        <meta data-hid="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta data-hid="twitter:image" name="twitter:image" content='./banner.png' />
        <meta data-hid="twitter:title" name="twitter:title" content='Пассивная иммунизация' />
        <meta data-hid="twitter:description" name="twitter:description" content='Вакцинация является важной опцией профилактики коронавирусной инфекции, однако не всегда она обеспечивает необходимую защиту. Люди со сниженным иммунитетом могут нуждаться в дополнительной защите от COVID-19' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (m, e, t, r, i, k, a) {
              m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(90157010, "init", {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true
              });
              `,
          }}
        />
        <script src="//policy.cookiereports.com/6a9c2daf_panel-ru.js" async></script>

        <noscript>
          <div><img src="https://mc.yandex.ru/watch/90157010" style={{"position":"absolute", "left":"-9999px;"}} alt="" async /></div>
        </noscript>
      </body>
    </Html>
  )
}
