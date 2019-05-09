import Link from 'next/link'

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
        <Sidebar />

        <section className="hero is-danger is-bold is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        A little about me
                    </h1>
                    <p className="is-size-4">
                        I like to think of myself as a Creative Developer, Family guy, "insert cute family photo here..." and all round nice Human Being.
                    </p>
                    <p className="is-size-5">
                        I work Fulltime and also get my hustle on after hours, when my children are asleep.
                    </p>
                    <br />
                    <p className="is-size-4 has-text-weight-light is-uppercase">
                    Nothing is impossible, you just have to do the work.
                    </p>
                    <br />
                    <p className="is-size-5">
                        I love developing applications for the web, tinkering with electronics and just making things. The possibilities are endless, the web is always changing and evolving and this in itself is amazing to be part of.
                    </p>
                    <br />
                    <p className="is-size-6">
                        It can be a headache sometimes, don't get me wrong, the ever-changing new framework on the block that you need to wrap your head around. But it's all part of the challenge. I like to think of myself as quite a positive person, always striving to find the good in any situation. Everything happens for a reason even if at the time it feels so wrong and not so good, your learning something from the experience...a takeaway.
                    </p>
                    <br />
                    <br />
                    <p className="is-size-4 has-text-right">
                        Feel free to reach out, Im pretty much everywhere online under the handle: <strong>ayoungh</strong>
                    </p>

                    {/* <ul> */}
                        {/* <li>Married for {2018-2012} years now</li> */}
                    {/* </ul> */}
                    {/* <Link href="/now"><a><strong>Now</strong></a></Link> */}
                </div>
            </div>
        </section>   

        <section className="hero is-small is-dark is-bold">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
                Experience
            </h1>

            </div>
        </div>
        </section>        


        <section className="section is-large">
            <div className="container">

                <br/>
                <div className="columns">
                <div className="column">
                    <h3 className="title is-3">Tech Stack</h3>
                </div>
                <div className="column">
                    <figure className="image is-128x128 custom-icon-center">
                        <img src="/static/icons/frontend-icon.svg" />
                    </figure>

                    <h4 className="title is-4 has-text-centered">Frontend</h4>
                    <div className="content">
                        <ul className="has-text-left">
                            <li>HTML5</li>
                            <li>CSS3 - SASS</li>
                            <li>JavaScript - jQuery | ReactJS </li>
                            <li>Email Templates</li>
                            <li>Redux</li>
                            <li>Mobx</li>
                            <li>AJAX</li>
                            <li>Convert | Optimizely | Webtrends Optimize | VWO</li>
                            <li>Photoshop | Illustrator | Premiere</li>
                            <li>Auth0</li>
                            <li>Training and supporting fellow developers</li>
                            <li>Angular 1.5</li>
                            <li>Version Control - GIT</li>
                            <li>Frameworks - Bootstrap | Foundation | Bulma </li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <figure className="image is-128x128 custom-icon-center">
                        <img src="/static/icons/backend-icon.svg" />
                    </figure>    
                    <h4 className="title is-4 has-text-centered">Backend</h4>  
                    <div className="content">      
                        <ul className="has-text-left">
                            <li>NodeJS</li>      
                            <li>PassportJS</li>
                            <li>ExpressJS</li>
                            <li>Mongoose</li>
                            <li>MongoDB</li>        
                            <li>REST APIs</li>
                            <li>MYSQL</li>
                            <li>AWS</li>        
                            <li>PYTHON</li>
                            <li>PHP - Wordpress | Codeigniter</li>
                        </ul>
                    </div>
                </div>
                </div>
            


            </div>
        </section>

        <section className="hero is-small is-dark is-bold">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
                Work
            </h1>
            </div>
        </div>
        </section>   

        <section className="hero is-medium is-success is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h3 className="title is-3">WeTeachCRO</h3>
                        </div>
                        <div className="column">
                            <h4 className="subtitle is-uppercase">Fullstack Javascript Developer</h4> <span className="tag is-success is-large">2017 - Present</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        <section className="hero is-medium is-info is-bold">
            <div className="hero-body">
                <div className="container">
                <div className="columns">
                    <div className="column">
                        <h4 className="title is-4">Webtrends</h4>
                    </div>
                    <div className="column">
                        <h4 className="subtitle is-uppercase">Fullstack Javascript Developer</h4> <span className="tag is-dark is-medium">2014 - 2017</span>
                    </div>
                </div>   
                </div>   

            </div>
        </section>  
        <section className="hero is-medium is-light is-bold">
            <div className="hero-body">
                <div className="container">
                <div className="columns">
                    <div className="column">
                        <h4 className="title is-4">Artlogic</h4>
                    </div>
                    <div className="column">
                        <h4 className="subtitle is-uppercase">Web Developer</h4> <span className="tag is-dark">2011 - 2014</span>
                    </div>
                </div> 
                </div> 
            </div>
        </section>  


        <section className="hero is-warning is-medium">
            <div className="hero-body">
                <div className="container">
                <h1 className="title has-text-centered">
                    Let's work together
                </h1>
                <h2 className="subtitle">
                    
                </h2>
                </div>
            </div>
        </section>    

        <div className="notification is-danger stuck">
            Sorry, this website is still being worked on.
        </div>            


        <Footer />

        <style jsx>{`
            .custom-icon-center { margin: 0 auto; }
        `}</style>
    </div>
)
