import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';
import Meta from '../components/meta';
import Hero from '../components/hero';
import Sidebar from '../components/sidebar';

export default () => (
    <div className="home">
        <Meta title="Home" />
        <Nav />
        <Hero />
        <Sidebar />

        <section className="section is-large">
            <div className="container">
                <h1 className="title">I enjoy being creative and learning </h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>
        <section className="section is-large">
            <div className="container">
                <h1 className="title">I have worked on over 100 websites.</h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>

        <Footer />

        <style jsx>{`
        
        `}</style>
    </div>
)