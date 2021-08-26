import Document, { Html, Head, Main, NextScript } from 'next/document'
import ComonoScreen from '../components/ComonoScreen'

class MyDocument extends Document {


  render() {
    return (
      <Html>
         <Head />
        <body>
          <Main />
          <NextScript />
          <ComonoScreen />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument