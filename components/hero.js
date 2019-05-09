//bulma hero
export default () => (<section className="hero is-fullheight home-hero snp">
  <div className="hero-body">
    <div className="container">
        <h1 className="title has-text-light is-size-1">
        Hello <span className="waver">👋</span>
        </h1>
        <h2 className="subtitle has-text-light is-size-3">
        Welcome to my personal website. 👨‍💻
        <br />
        I'm a Creative Developer.
        <br />
            <i className="fab fa-react"></i> <i className="fab fa-node-js"></i> <i className="fab fa-js-square"></i> <i className="fab fa-css3"></i> <i className="fab fa-html5"></i>
        </h2>
    </div>
        <cite><a href="https://unsplash.com/@ayoungh">Unsplash page</a></cite>
  </div>
<style jsx>{`
        .home-hero {
            background-image: url("/static/images/anthony-young-681995-unsplash-opt.jpg");
            background-size: cover;
        }   

        .home-hero h1, .home-hero h2 {
            background: rgba(255, 98, 103,0.5);
            display: inline-block;
            float: left;
            clear: both;
            padding: 5px;
        }

        .home-hero h1 span {
            display: inline-block;
            padding-right: 10px;
        }

        cite {
            position: absolute;
            bottom: 10px;
            right: 10px;
            
        }
        cite a {
            color: white;
        }

`}</style>  
</section>)