import Link from 'next/link'

export default () => (
    <React.Fragment>
    <aside className="right-bar">

        <a href="https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ" target="_blank">
            <i className="fab fa-youtube"></i>
        </a>

        <a href="https://www.facebook.com/ayoungdesigner" target="_blank">
            <i className="fab fa-facebook-square"></i>
        </a>
        
        <a href="https://instagram.com/ayoungh" target="_blank">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/ayoungh" target="_blank">
            <i className="fab fa-twitter-square"></i>
        </a>

        <a href="https://github.com/ayoungh" target="_blank">
            <i className="fab fa-github-square"></i>
        </a>


        
    </aside>
    <i className="fa fa-angle-left arrow"></i>


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

      .arrow {
          font-size: 20px;
          position: fixed;
          left: 20px;
          bottom: 55px;
          z-index: 19;
          color: white;
         -webkit-animation: suggest 1.5s linear infinite;
         animation: suggest 1.5s linear infinite;        
      }

        @-webkit-keyframes suggest {
            0% {
                margin-left: 10px;
            }
            50% {
                margin-left: 5px;
            }    
            80% {
                margin-left: 0px;
            }
            100% {
                margin-left: 10px;
            }
        }

        @keyframes suggest {
            0% {
                margin-left: 10px;
            }
            50% {
                margin-left: 5px;
            }
            50% {
                margin-left: 0px;
            }
            100% {
                margin-left: 10px;
            }
        }


    `}</style>    
    </React.Fragment>

)