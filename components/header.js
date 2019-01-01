import Link from 'next/link'

export default () => (
    <header>
        <div className="branding">
            <Link href="/">
                <a>Anthony Young</a>
            </Link>
        </div>
        <nav>
            <Link prefetch href="/about">
                <a>About</a>
            </Link>
            <Link prefetch href="/blog">
                <a>Blog</a>
            </Link>            
        </nav>
        

        <style jsx>{`
      header {
        // background: #ff6267;
        background: #1d1d1d;
        height: 40px;
        display: flex;
        font-size: 14px;
        padding: 10px 40px;
        z-index: 99;
      }
      .branding {
          font-weight: bold;
          font-size: 18px;
          color: #ffffff;
          padding: 0 5px;
      }
      .branding a {
          color: #ffffff;
          font-weight: bold;
          padding: 0 10px;
          line-height: 2px;
          text-decoration: none;          
      }
      nav a {
          color: #ffffff;
          font-weight: bold;
          padding: 0 10px;
          line-height: 2px;
          text-decoration: none;
      }
      @media (max-width: 750px) {
        .nav {
          display: block;
        }
      }
    `}</style>
    </header>
)