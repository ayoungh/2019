import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
//bulma
import '../assets/bulma/bulma.sass';

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({title}) => (
    <div>
        <Head>
            <title>{title} - Anthony Young - Creative Developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/static/favicon.ico" />
            {/* <link rel="stylesheet" href="/static/bulma/bulma.min.css"></link> */}
            <script defer src="https://use.fontawesome.com/releases/v5.6.3/js/all.js" integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1" crossOrigin="anonymous"></script>

            <script dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-KZQWZF');`}} />

        </Head>
        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
            background: #eee;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .content {
              margin: 15px 15px 15px 55px;
          }

          /* loading progress bar styles */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #ff6267;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #ff6267, 0 0 5px #ff6267;
            opacity: 1.0;
            transform: rotate(3deg) translate(0px, -4px);
          }

          .waver {
            text-align: center;
            animation: waver 0.65s alternate infinite;
            transform-origin: 50% 90%;
            animation-timing-function: ease-in-out;
          }

          @keyframes waver {
            0% {transform: rotate(-20deg);}
            100% {transform: rotate(20deg);}
          }

          
        `}</style>
    </div>
)