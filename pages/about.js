import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Meta from '../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />   

        <div className="content">
            <h3>About me:</h3>
            <ul>
                <li>Married for {2018-2012} years now</li>
            </ul>
        </div>


        <Footer />
    </div>
)