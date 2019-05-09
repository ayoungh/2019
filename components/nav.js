import { useState } from 'react';
import Link from 'next/link'
//bulma nav
import Portal from '../components/portal';
import Modal from '../components/modal';

import classnames from 'classnames';

// const [menu, menuState] = useState(false);


export default function Nav(props) {
  const [showModal, setVisiblity] = useState(false);
  const [showNav, setNav] = useState(false);

  var cls = classnames('navbar-menu', { 'is-active': showNav });

  return (
<nav className="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation" >
<div className="container">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
        Anthony Young
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain" onClick={()=>setNav(!showNav)}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarMain" className={cls}>
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
      {false && <Link href="/blog">
        <a className="navbar-item" >    
            Blog
        </a>
      </Link>}

{/* <div className="navbar-item has-dropdown is-hoverable">
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
</div> */}



    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary" onClick={() => { setVisiblity(true)}}>
            <strong>Get in touch</strong>
          </a>
        </div>
      </div>
    </div>
  </div>

    </div> 
    {showModal ? <Portal selector='#modal'><Modal onClose={()=>{setVisiblity(false)}} background={true}>
<div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Contact Form</p>
      <button className="delete" aria-label="close" onClick={()=>{setVisiblity(false)}}></button>
    </header>
    <section className="modal-card-body">
    <p><strong>Coming soon.</strong> You can reach out to me on:</p>

<br />

<nav className="level">
  <div className="level-item has-text-centered">
    <div>
        <a href="https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ" target="_blank">
            <i className="fab fa-youtube"></i>
        </a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
        <a href="https://www.facebook.com/ayoungdesigner" target="_blank">
            <i className="fab fa-facebook-square"></i>
        </a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
        <a href="https://instagram.com/ayoungh" target="_blank">
            <i className="fab fa-instagram"></i>
        </a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
        <a href="https://twitter.com/ayoungh" target="_blank">
            <i className="fab fa-twitter-square"></i>
        </a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
        <a href="https://github.com/ayoungh" target="_blank">
            <i className="fab fa-github-square"></i>
        </a>
    </div>
  </div>
</nav>





        





    </section>
    <footer className="modal-card-foot">

    </footer> 
    </div>   
    </Modal></Portal> : null}
</nav>
)
};
