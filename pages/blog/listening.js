import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Listening to - Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />

        <div className="content">
            Listening to
        </div>


        <Footer />
    </div>
)