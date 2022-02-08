import Script from "next/script";

export default function SiteScripts() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NNQMNNCNE7`}
      />
      <Script id="gtag" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-NNQMNNCNE7');
        `}
      </Script>
      <Script
        id="iframely"
        strategy="lazyOnload"
      >{`document.querySelectorAll( 'oembed[url]' ).forEach( element => {
        iframely.load( element, element.attributes.url.value );
    } );`}</Script>
      <Script src={"/prism/prism.js"}></Script>
    </>
  );
}
