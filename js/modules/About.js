import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Square from './Square'

export default React.createClass({
  render() {
    return (
      <div>

        <Header
          title={'About'}
          image={'http://vignette2.wikia.nocookie.net/theflash/images/d/d3/Jl-crisis(Flash).jpg/revision/latest?cb=20150329021949'}
        />

      <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Education</h2>
            <p>
              Saint Joseph's College<br/>
              B.S. Computer Science, Minor: Mathematics (May 2016)<br/>
              3.91 GPA (4.00 scale)
            </p>
          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">Curent Interest</h2>
            <p>
              I am focused on keeping up with new technologies. The notion of a
              “web page” is undergoing revolutionary change, lines are blurring
              between client and server, and the importance of JavaScript
              continues to grow. I cannot predict how these things will come
              together, but I know this is the path that I want to be on.
            </p>
          </div>
        </div>
        {/*eventually planing to read all the info out of the JSON file or database*/}

        <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Programing Languages</h2>
              <div className="row text-center">
                <Square
                  title="Javascript"
                  />
                <Square
                  title="Java"
                  />
                <Square
                  title="Payton"
                  />
                <Square
                  title="C"
                  />
                <Square
                  title="C#"
                  />
                <Square
                  title="HTML"
                  />
                <Square
                  title="CSS"
                  />

              </div>
          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">experience</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="col-md-12 experience text-center">
                  <a href="https://facebook.github.io/react/" target="_blank"><p>React</p></a>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>Angular</p>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>jQuery</p>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>JSON</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-md-12 experience text-center">
                  <p>Node</p>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>Bootstrap</p>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>Atom</p>
                </div>
                <div className="col-md-12 experience text-center">
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Languages</h2>
            <div className="row">
              <div className="col-md-1"><h4>Fluent:</h4></div> {/* dummy div to create space */}
              <div className="col-md-2">
                <div className="square text-center">
                  <p>Serbian</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="square text-center">
                  <p>English</p>
                </div>
              </div>
              <div className="col-md-1"><h4>Good:</h4></div>
              <div className="col-md-2">
                <div className="square text-center">
                  <p>Hungarian</p>
                </div>
              </div>
              <div className="col-md-1"><h4>Basic:</h4></div>
              <div className="col-md-2">
                <div className="square text-center">
                  <p>German</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">Honors and Activities</h2>
            <p>
              President of Computer Club 2014 - 2016 <br/>
              NCAA Division II Basketball Player 2012 - 2016<br/>
              GLVC Academic All Conference 2012-16<br/>
              The National Society of Leadership and Success since 2015<br/>
              Delta Epsilon Sigma National Scholastic Honor Society since 2014<br/>
              Alpha Lambda Delta National Honors Society 2013
            </p>


          </div>
        </div>


      </div>
    )
  }
})
