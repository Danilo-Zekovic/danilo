import React from 'react'
import ReactDOM from 'react-dom'

export default React.createClass({
  render() {
    return (
      <div>
        <div className="user-intro foo2 container-fluid text-center">
          <img className="img-circle img-responsive text-center github-logo" src='http://static.comicvine.com/uploads/original/11115/111158530/4452265-screen+shot+2015-03-16+at+23.18.53.png'/>
          <h1>Contact</h1>
        </div>

        <div className="container-fluid">
          <div className="container text-center">
            <h2 className="subtitle">Martian Comunication</h2>
            <p>Although I aspire to one day change the world with my code, one
              of the biggest passions in my life is learning. I want to start my
              career by tackling problems for my clients and growing in my
              experience with each line of code. I enjoy expressing creativity,
              which I hope to use in creating software that impacts people's
              lives.
            </p>
          </div>
        </div>

      </div>
    )
  }
})
