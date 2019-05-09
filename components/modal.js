import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
    // el = document.createElement("div");

    // componentDidMount() {
    //     modalRoot.appendChild(this.el);
    // }
    // componentWillUnmount() {
    //     modalRoot.removeChild(this.el);
    // }

    render() {
        // ReactDOM.createPortal
        return ( 

            <div className="modal is-active">

                {this.props.background ? <div className="modal-background"></div> : null}
                <div className="modal-content">
                    {this.props.children}
                    Test
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.props.onClose}></button>
            </div>
            );
            // ,
            // this.el);
    }
}
