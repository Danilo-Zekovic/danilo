/*
  ** Header that shows up on all views but the Home
  * Made out of image and title of that view
*/

import React from "react"
import ReactDOM from "react-dom"


export default React.createClass({
  render() {
    const title = this.props.title
    const image = this.props.image
    return (
      <div className="user-intro container-fluid text-center">
        <img className="img-circle img-responsive text-center github-logo" src={image}/>
        <h1>{title}</h1>
      </div>
    )
  }
})
