import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{ scrollBehavior: "smooth" }}>
      <Head>
        {/* Primary Meta Tags */}
        <title>Wolfi Land</title>
        <link rel="shortcut icon" href="/icons/favicon.png" />
        <meta name="title" content="Wolfi Land" />
        <meta
          name="description"
          content="Welcome to the first official NFT collection of Wolfi! The most popular mascot of Avalanche (AVAX). Enter now and mint your own Wolfi!"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.wolfi.land" />
        <meta property="og:title" content="Wolfi Land" />
        <meta
          property="og:description"
          content="Welcome to the first official NFT collection of Wolfi! The most popular mascot of Avalanche (AVAX). Enter now and mint your own Wolfi!"
        />
        <meta
          property="og:image"
          content="img/og-wolfi.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wolfilandnfts" />
        <meta name="twitter:creator" content="@HermanaRobot" />
        <meta property="twitter:url" content="https://www.wolfi.land" />
        <meta property="twitter:title" content="Wolfi Land" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
