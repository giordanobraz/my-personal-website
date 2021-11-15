import { useEffect, useState } from "react";
const KEY = "794bb02f714ec48a302d39";

export default function Iframely(props: any) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [html, setHtml] = useState({
    __html: "<div />"    
  })

  useEffect(() => {
    if(props && props.url) {
      fetch(`https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(props.url)}&key=${KEY}&iframe=1&omit_script=1`)
    }
  })


  return <h1>Hey</h1>
}