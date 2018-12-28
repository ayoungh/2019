import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <p>Hello world!</p>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>
)