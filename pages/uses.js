import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Meta from '../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Uses</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />        

        <div className="content">
            <h3>All the things I use:</h3>
            <ul>
                <li>VScode</li>
                <li>Chrome</li>    
                <li>Now</li>
                
            </ul>             
        </div>





        <Footer />
    </div>
)