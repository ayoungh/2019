import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Meta from '../components/meta';
import Hero from '../components/hero';
import Sidebar from '../components/sidebar';

export default () => (
    <div className="home snappy">
        <Meta title="Home" />
        <Nav />
        <Hero />
        <Sidebar />

        <section className="hero is-large is-warning is-bold">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
                I enjoy being creative and learning.
            </h1>
            </div>
        </div>
        </section>       
        <section className="hero is-large is-success is-bold">
        <div className="hero-body">
            <div className="container">
            <h2 className="title has-text-right">
                I've worked on over <strong>200+</strong> websites.
            </h2>
            </div>
        </div>
        </section>       
        <section className="hero is-medium is-info is-bold">
        <div className="hero-body">
            <div className="container">
            <h3 className="title has-text-centered">
                Let's connect.
            </h3>
            </div>
        </div>
        </section>       


        <div className="notification is-danger stuck">
            Sorry, this website is still being worked on.
        </div>

        <Footer />

        <style jsx>{` 

.snappy {
    scroll-snap-type: y mandatory;
}

.snp {
    scroll-snap-align: start;        
}
        `}</style>
    </div>
)