import Link from 'next/link'
//bulma nav
export default () => (
    <nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
<div className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
        Anthony Young
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link href="/">
        <a className="navbar-item" >
            Home
        </a>
      </Link>

      <Link href="/about">
        <a className="navbar-item" >    
            About
        </a>
      </Link>
      <Link href="/blog">
        <a className="navbar-item" >    
            Blog
        </a>
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Get in touch</strong>
          </a>
        </div>
      </div>
    </div>
  </div>

    </div> 
</nav>
)