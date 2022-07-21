import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
    <div>
  {/* Primary Meta Tags */}
  <title>Welcome to Wolfiland!</title>
  <meta name="title" content="Welcome to Wolfiland!" />
  <meta name="description" content="I am Mar, the creator of wolfi, the most popular mascot among the Avalanche community. I’ve been active working on different projects, but currently, I am a freelancer designer. I created wolfi after a group of friends that loved AVAX asked me to do it. Today, I decided to create the first official wolfi collection, which mainly works as a fund to support me as an artist." />
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="Welcome to Wolfiland!" />
  <meta property="og:description" content="I am Mar, the creator of wolfi, the most popular mascot among the Avalanche community. I’ve been active working on different projects, but currently, I am a freelancer designer. I created wolfi after a group of friends that loved AVAX asked me to do it. Today, I decided to create the first official wolfi collection, which mainly works as a fund to support me as an artist." />
  <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="Welcome to Wolfiland!" />
  <meta property="twitter:description" content="I am Mar, the creator of wolfi, the most popular mascot among the Avalanche community. I’ve been active working on different projects, but currently, I am a freelancer designer. I created wolfi after a group of friends that loved AVAX asked me to do it. Today, I decided to create the first official wolfi collection, which mainly works as a fund to support me as an artist." />
  <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
</div>


      </Head>

      <body style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
