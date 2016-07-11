import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header
          title={'Contact'}
          image={'http://static.comicvine.com/uploads/original/11115/111158530/4452265-screen+shot+2015-03-16+at+23.18.53.png'}
        />

      <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Martian Comunication</h2>
            <div className="row">
              <div className="col-md-12">
                  <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                  <a><p>dzv9776@saintjoe.edu</p></a>
              </div>
              <div className="col-md-12">
                <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
                  <i className="fa fa-facebook-square fa-5x" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
                  <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/Danilo-Zekovic" target="_blank">
                  <i className="fa fa-github-square fa-5x" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
})
