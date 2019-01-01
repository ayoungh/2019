import React from 'react'
import Link from 'next/link';
// import Zeit from '../static/zeit-white-full-logo.svg'

export default () => (
    <footer>
        <div className="copyright">
            2019.
        </div>
        <div className="built">
            {/* <a href="https://nextjs.org" title="Built with NextJS" target="_blank"><img src="../static/nextjs-white-logo.svg" /></a> */}
        </div>
        <div className="deployed">
            {/* <a href="https://zeit.co" title="Deployed on Zeit Now" target="_blank"><img src="../static/now-white.svg" /></a> */}
        </div>

        <style jsx>{`
        footer {
            background: #1d1d1d;
            height: 40px;
            display: flex;
            font-size: 14px;
            padding: 10px 15px;
            position: fixed;
            bottom: 0px;
            width: 100%;
        }
        .copyright {
            text-align: center;
            color: #ffffff;
            width: 100%;
        }
        .built {
            display: inline;
            padding: 0 15px;
        }
        .built img {
            height: 18px;
            display: inline;
        }
        .deployed {
            display: inline;
        }
        .deployed img {
            height: 12px;
            display: inline;
        }
    `}</style>
    </footer>
)