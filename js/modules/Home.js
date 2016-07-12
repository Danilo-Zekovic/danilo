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
                {/*<div className="user-img img-circle"></div>*/}
                <img className="img-circle img-responsive text-center user-img" src='http://assets2.ignimgs.com/2016/04/11/suicide-squad-harley-mallet-1280jpg-6846ad_1280w.jpg'/>
              </div>
              <div className="col-xs-12 col-md-7">
                <h2 className="text-center subtitle">I am creative web developer</h2>
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
                <div className="col-md-3">
                  <img className="img-responsive tech-logo" src="http://orig07.deviantart.net/35dd/f/2011/034/c/c/lexcorp_by_naughtyt-d38qnrs.png"/>
                </div>
                <div className="col-md-3">
                  <img className="img-responsive tech-logo" src="http://orig07.deviantart.net/35dd/f/2011/034/c/c/lexcorp_by_naughtyt-d38qnrs.png"/>
                </div>
                <div className="col-md-3">
                  <img className="img-responsive tech-logo" src="http://orig07.deviantart.net/35dd/f/2011/034/c/c/lexcorp_by_naughtyt-d38qnrs.png"/>
                </div>
                <div className="col-md-3">
                  <img className="img-responsive tech-logo" src="http://orig07.deviantart.net/35dd/f/2011/034/c/c/lexcorp_by_naughtyt-d38qnrs.png"/>
                </div>


            </div>
          </div>
        </div>

      </div>
    )
  }
})
