import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <header className="intro foobar2">
          <div className="intro-body">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h1 className="brand-heading">Coming Soon</h1>
                  <p className="intro-text">Just example text and pictures</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*<div className="foobar img-responsive"></div>*/}

        <div className="container-fluid white">
          <div className="container">

            <div className="row">
              <div className="col-xs-12 col-md-5">
                {/*<div className="u-img img-circle img-responsive"></div>*/}
                <img className="img-circle img-responsive text-center user-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAmGAAAAJDczZjFmNGUyLTllMmItNGZkNC04MDkyLTAzMmQxMzJlOTUwZg.jpg"/>
              </div>
              <div className="col-xs-12 col-md-7 statment">
                <h2 className="text-center subtitle">Learning, Creativity, Development...</h2>
                <p className="text-center">Although I aspire to one day change the world with my code, one
                  of the biggest passions in my life is learning. I want to start my
                  career by tackling problems for my clients and growing in my
                  experience with each line of code. I enjoy expressing creativity,
                  which I hope to use in creating software that impacts people's
                  lives. </p>
              </div>
            </div>

          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container">
            <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
              <div>
                <img className="text-center github-logo img-responsive text-center" src='https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'/>
                <h3 className="text-center">Clone or fork this webpage source code</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="container-fluid white">
          <div className="container">
            <div className="row">

                <h2 className="text-center subtitle">Technologies Used</h2>
                <div className="col-md-12 text-center">
                  <img className="reactjs-icon img-responsive" src="https://www.levelupdevelopment.com/wp-content/uploads/2015/06/react-opti.png"/>
                </div>
                <div className="col-md-4">
                  <img className="img-responsive tech-logo nodejs-icon"/>
                </div>
                <div className="col-md-4">
                  <img className="img-responsive tech-logo bootstrap-icon"/>
                </div>
                <div className="col-md-4">
                  <img className="img-responsive tech-logo atom-icon"/>
                </div>


            </div>
          </div>
        </div>

      </div>
    )
  }
})
