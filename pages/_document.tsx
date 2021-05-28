import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html data-theme="light" lang="en">
        <Head />
        <body className="bg-base-100 dark:bg-neutral">
          <a href="#main" className="sr-only focus:not-sr-only">
            Skip to main content
          </a>
          <a href="#search" className="sr-only focus:not-sr-only">
            Skip to search
          </a>
          <a href="#footer" className="sr-only focus:not-sr-only">
            Skip to footer
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
