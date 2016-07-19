/*
  ** Square should display skils and other info on the specific way
*/

import React from "react"
import ReactDOM from "react-dom"


export default React.createClass({
  render() {
    const title = this.props.title
    const location = this.props.location
    const date = this.props.date
    const jobTitle = this.props.jobTitle
    const position = this.props.position
    const technologies = this.props.technologies
    const project = this.props.project
    return (
      <div className="container">
        <h2 className="subtitle">{title}</h2>
        <ul>
          <li>Location: {location}</li>
          <li>Date: {date}</li>
          <li>Title: {jobTitle}</li>
          <li>Position: {position}</li>
        </ul>
        <hr/>
        <h4>Technologies Used:</h4><p>{technologies}</p>
        <hr/>
        <h4>Project</h4>
        <p>
          <span className="light">Description:</span> {project}
        </p>
        <hr/>
      </div>
    )
  }
})
