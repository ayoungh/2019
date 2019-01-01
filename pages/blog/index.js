import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import Meta from '../../components/meta';
import Card from '../../components/card.js';

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

            <div className="posts">
                <Card title="Year 2019" post="2019"/>
                <Card title="Things I listen to" post="listening"/>

            </div>
        </div>
        <Footer />
        <style jsx>{`
            .content .posts {
                display: flex;
                overflow: hidden;
            }
        `}</style>
    </div>
)