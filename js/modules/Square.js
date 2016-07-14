/*
  ** Square should display skils and other info on the specific way
*/

import React from "react"
import ReactDOM from "react-dom"


export default React.createClass({
  render() {
    const title = this.props.title
    return (
      <div className="square text-center">
        <p>{title}</p>
      </div>
    )
  }
})
