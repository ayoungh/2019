import Link from 'next/link'

export default () => (
    <aside className="right-bar">

        <a href="https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ">
            <i className="fab fa-youtube"></i>
        </a>

        <a href="https://www.facebook.com/ayoungdesigner">
            <i className="fab fa-facebook-square"></i>
        </a>
        
        <a href="https://twitter.com/ayoungh">
            <i className="fab fa-twitter-square"></i>
        </a>

        <a href="https://github.com/ayoungh">
            <i className="fab fa-github-square"></i>
        </a>


        <style jsx>{`
      aside {
        // background: #1d1d1d;
        border-right: 2px solid #1d1d1d;
        width: 10px;
        display: flex;
        flex-direction: column-reverse;
        font-size: 18px;
        text-align: center;
        padding: 50px 0px;
        position:fixed;
        left: 0px;
        top:0;
        bottom:0;
        height:100vh;
        z-index: 20;
        overflow: hidden;
      }

      aside:hover {
        width: 40px;
        padding: 50px 10px;
        transition: width 1s, padding 1s;
        transition-timing-function: ease-in;
      }

      aside a {
          color: #ffffff;
      }

    `}</style>
    </aside>
)