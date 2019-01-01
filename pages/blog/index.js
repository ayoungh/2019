import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - 2019 - Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />

        <div className="content">
            <h3>The Blog</h3>
            <ul>
                <li><Link href="/blog/2019"><a>2019 Article</a></Link></li>
            </ul>
        </div>


        <Footer />
    </div>
)