import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Meta from '../components/meta';

export default () => (
    <div className="home">
        <Head>
            <title>Anthony Young - Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />
        <div className="content">

            <p>Hi, I'm a creative developer.</p>

            <h3>Site in progress...</h3>

            <a className="unsplash-credit" href="https://unsplash.com/@ty_dudley?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Tyson Dudley"><span><svg xmlns="http://www.w3.org/2000/svg" style={{height:'12px', width:'auto', position:'relative', verticalAlign:'middle', top:'-2px', fill:'white'}} viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span className="credit-name">Tyson Dudley</span></a>
        </div>
        <Footer />
        

        <style jsx>{`
        body, p, h3, li, a { 
            color: #ffffff;
        }
        
      .home {
        background-image: url('/static/tyson-dudley-134446-unsplash.jpg');
        background-size: cover;
        height: 100vh;
        background-position: center center;
      }

      .content {
          padding: 10px 15px 10px 55px;
      }

      .unsplash-credit {
          position: fixed;
          bottom: 50px;
          right: 15px;
          z-index: 99;
          background-color:black;
          color:white;
          text-decoration:none;
          padding:4px 6px;
          font-family: -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
          font-size:12px;
          font-weight:bold;
          line-height:1.2;
          display:inline-block;
          border-radius:3px;
      }
      .unsplash-credit span {
          display:inline-block;
          padding:2px 3px;
      }

      .credit-name {
        display:inline-block;
        padding:2px 3px;
      }

    `}</style>        
    </div>    
)