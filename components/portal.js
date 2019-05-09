import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount () {
    this.element = document.querySelector(this.props.selector);
    console.log('Portal did mount', this.element, this.props);
      
  }

// componentWillUnmount() {
//     document.querySelector(this.props.selector).removeChild(this.el);
// }  

  render () {
    if (document.querySelector(this.props.selector) === undefined) {
      console.log('unde..');
      return null
    }

    return ReactDOM.createPortal(this.props.children, document.querySelector(this.props.selector))
  }
}