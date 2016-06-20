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

        <div className="user-intro foo2 container-fluid">
          <div className="container">

            <div className="row">
              <div className="col-xs-12 col-md-5">
                {/*<div className="user-img img-circle"></div>*/}
                <img className="img-circle img-responsive text-center user-img" src='http://assets2.ignimgs.com/2016/04/11/suicide-squad-harley-mallet-1280jpg-6846ad_1280w.jpg'/>
              </div>
              <div className="col-xs-12 col-md-7">
                <h2 className="text-center subtitle">Harley Quinn</h2>
                <p className="text-center">Harley Quinn (Harleen Frances Quinzel) is a fictional character
                  appearing in American comic books published by DC Comics,
                  commonly as an adversary of the superhero Batman. </p>
              </div>
            </div>

          </div>
        </div>

        <div className="git-hub container-fluid">
          <div className="container">
            <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
              <div>
                <img className="text-center github-logo img-responsive text-center" src='https://assets-cdn.github.com/images/modules/logos_page/Octocat.png'/>
                <h3 className="text-center">Clone or fork this webpage source code</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="tech container-fluid">
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



        <div className="foo1">

        </div>

      </div>
    )
  }
})
