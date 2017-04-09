import Document, { Head, Main, NextScript } from 'next/document'
import { styleSheet } from 'styled-components'

export default class extends Document {

  static async getInitialProps ({ renderPage }) {

    const { html, head } = renderPage()

    const style = styleSheet.getCSS()

    return { html, head, style }

  }

  render () {

    return (
     <html>

       <Head>
         <title>Shandy Club</title>
         <meta charSet='utf-8' />
         <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
         <link rel='shortcut icon' type='image/x-icon' href='/static/img/favicon.png' />
         <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/4.1.0/sanitize.min.css' />
         <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:700|Karla' />
         <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
         <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.1/dist/leaflet.css' />
         {/* <style dangerouslySetInnerHTML={{ __html: this.props.style }} /> */}
       </Head>

       <body>

         <Main />

         <NextScript />

       </body>

     </html>
    )

  }

}
