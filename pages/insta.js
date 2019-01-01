import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Insta Links</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <ul><li>Show all links for the gramsss</li></ul>

        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
)