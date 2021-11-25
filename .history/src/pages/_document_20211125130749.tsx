// eslint-disable-next-line @next/next/no-document-import-in-page
import { ColorModeScript } from "@chakra-ui/react";
import createEmotionServer from "@emotion/server/create-instance";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from "next/document";
import DefaultMeta from "../components/Meta";
import emotionCache from "../configs/emotion-cache";

const { extractCritical } = createEmotionServer(emotionCache);

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <style
          key="emotion-css"
          dangerouslySetInnerHTML={{ __html: styles.css }}
          data-emotion-css={styles.ids.join(" ")}
        />,
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <DefaultMeta />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
