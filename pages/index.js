import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ul>
            <li>Pages: Home, blog, about, now</li>
        </ul>


        <p>Hello world!</p>
        <Link prefetch href="/about">
            <a>about</a>
        </Link>
    </div>    
)