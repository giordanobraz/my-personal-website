export default function DefaultMeta() {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta
        name="keywords"
        content="desenvolvedor, developer, javascript, typescript, angular, react, reactjs, nextjs, fullstack, full stack, mern, mean"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <script
        async
        src={`//cdn.iframe.ly/embed.js?api_key=${process.env.NEXT_PUBLIC_IFRAMELY}`}
      ></script>
    </>
  );
}
