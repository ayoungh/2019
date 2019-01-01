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
            <p>
                I like to consider myself as a Creative Developer, Family guy, insert cute family photo here... and All round Human Being.</p>
            <p>
                I work full time as a Fullstack Javascript Developer for WeTeachCRO.
            </p>
            <p>
                I love being involved in developing applications for the web, the possibilities are endless, the web is always changing and evolving and this in itself is so amazing to be part of.
            </p>
            <p>
                It can be a headache, don't get me wrong, the ever-changing top new framework that you need to wrap your head around. But its all in the challenge of it all. I like to think of myself as quite a positive person, always striving to find the good in a situation. Everything happens for a reason even if at the time it feels so wrong and not so good, your learning something from the experience...a takeaway. Feel free to reach out, Im pretty much everywhere online under the handle: <strong>ayoungh</strong>
            </p>
            <ul>
                {/* <li>Married for {2018-2012} years now</li> */}
            </ul>
            <Link href="/now"><a>Check out what I am doing right <strong>Now</strong></a></Link>
        </div>


        <Footer />
    </div>
)