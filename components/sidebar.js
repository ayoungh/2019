import Link from 'next/link'

export default () => (
    <aside>

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
        background: #1d1d1d;
        width: 40px;
        display: flex;
        flex-direction: column-reverse;
        font-size: 18px;
        text-align: center;
        padding: 50px 10px;
        position:fixed;
        left: 0px;
        top:0;
        bottom:0;
        height:100vh;
        z-index: 80;
      }

      aside a {
          color: #ffffff;
      }

    `}</style>
    </aside>
)