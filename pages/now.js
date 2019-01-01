import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';
import Meta from '../components/meta';

export default () => (
    <div>
        <Head>
            <title>Anthony Young - Now</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Meta />
        <Header />
        <Sidebar />        

        <div className="content">
            <img src="../static/404328.jpeg" alt="Anthony Young Portrait"/>
            <h2>Anthony Young</h2>
            <h3>Location:</h3>
            <p>Epsom, Surrey, United Kingdom</p>
            <br/>
            <h3>Professional Title:</h3>
            <p>Javascript Developer</p>
            <br />            
            <h3>What do I do?</h3>
            <p>I'm currently working as a Javascript Developer at a company called WeTeachCRO. </p>
            <br />            
            <h3>Why?</h3>
            <p>I love having the power to create anything I can think of with code.</p>
            <br />
            <h3>What should we read?</h3>
            <p>That really depends on what you like, I recommend: Ready Player One, Elon Musk, Built to Sell, Life 3.0 ...</p>
            <br />   
            <h3>URLs:</h3>
            <a href="ayoungh.co.uk" >ayoungh.co.uk</a>
            <br />                                   
        </div>





        <Footer />
    </div>
)