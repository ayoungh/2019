import Link from 'next/link';

export default class Card extends React.Component {
    // static async getInitialProps() {
    //     // eslint-disable-next-line no-undef
    //     const res = await fetch('https://api.github.com/repos/zeit/next.js')
    //     const json = await res.json()
    //     return { stars: json.stargazers_count }
    // }

    render() {
        return (
            <div className="card card--fixedWidth">
                <Link href={"/blog/"+this.props.post}>
                    <a>
                        <div className="card__description">
                            <div className="icon fa far fa-file-alt card__descriptionIcon"></div>
                            <div className="card__descriptionText">{this.props.title}</div>
                        </div>
                    </a>
                </Link>
                <style jsx>{`

            .card {
                /**
                 * Lay out the children of this container with
                 * flexbox, which is horizontal by default.
                 */
                display: flex;
                // flex: 1 1 0%;
          
            /**
             * Rotate the main axis so that the children
             * are laid out vertically.
             */
            flex-direction: column;
            border: 1px solid #CAD0D2;
            border-radius: 4px;
            overflow: hidden;
            background: #1d1d1d;
            color: #ffffff;
          }
          
            .card__description {
                /**
                 * Lay out the children of this container with
                 * flexbox.
                 */
                display: flex;
        
            /**
             * We're going to lay out this element's children
             * just like in the "Centered prompt" example.
             * First we'll rotate the main axis so that the
             * children are laid out vertically.
             */
            flex-direction: column;
        
            /**
             * Just like in the "Centered prompt", we'll
             * group the children in the center of their
             * container.
             */
            justify-content: center;
        
            /**
             * And just like in the "Centered prompt" example,
             * we'll align the children in the center, along
             * the main axis.
             */
            align-items: center;
        
            padding: 15px 0;
            color: #ffffff;
          }
        
            .card__descriptionIcon {
                font-size: 32px;
                margin-bottom: 10px;
            }
      
            .card__descriptionText {
                color: #ffffff;
                font-size: 12px;
                text-align: center;
                max-width: calc(100% - 30px);
            }
        
            .card__price {
                text - align: center;
                color: #57727C;
                font-size: 12px;
                font-weight: 700;
                padding: 5px 15px;
                border-top: 1px solid #D7DBDD;
                background-color: #EEF3F5;
            }
            
            .card--fixedWidth {
                max-width: 120px;
            }
                  
        `}</style>
            </div>
        )
    }
}
