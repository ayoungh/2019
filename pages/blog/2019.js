import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Year 2019 - Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />

        <div className="content">
            <h3>Year 2019</h3>
            <p>I started with this post on medium by planning my year: <a href="https://medium.com/@ayoungh/planning-the-new-year-2019-6567f18c8148" target="_blank">Planning the New Year — 2019</a></p>
        </div>


        <Footer />
    </div>
)