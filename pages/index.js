import Head from 'next/head';
import Link from 'next/link';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Homepage</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h3>Site in progress...</h3>
        <ul>
            <li>Pages: Home, blog, about, now</li>
            <li>Blog to be static</li>
            <li>About to have details about me</li>
            <li>Now page to be about whats happening in life now</li>
        </ul>


        <p>Hello world!</p>
        <Link prefetch href="/about">
            <a>about</a>
        </Link>
    </div>    
)