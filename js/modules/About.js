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
            <h2 className="subtitle">Flash</h2>
            <p>Although I aspire to one day change the world with my code, one
              of the biggest passions in my life is learning. I want to start my
              career by tackling problems for my clients and growing in my
              experience with each line of code. I enjoy expressing creativity,
              which I hope to use in creating software that impacts people's
              lives.
            </p>
          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">Education</h2>
            <p>
              Saint Joseph's College<br/>
              B.S. Computer Science, Minor: Mathematics (May 2016)<br/>
              3.91 GPA (4.00 scale)
            </p>
          </div>
        </div>

        <div className="container-fluid white">
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

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">Programing Languages</h2>
              <div className="row">


                  <div className="col-md-3">
                    <Square
                      title="Javascript"
                      />
                  </div>
                  <div className="col-md-3">
                    <Square
                      title="Java"
                      />
                  </div>
                  <div className="col-md-3">
                    <Square
                      title="Python"
                      />
                  </div>
                  <div className="col-md-3">
                    <Square
                      title="C"
                      />
                  </div>


              </div>
          </div>
        </div>

        <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Skills</h2>
            <p>
              Programing Languages: JavaScript, Java, Python, C, HTML, CSS
              Conversant with Linux shell, edit, and build systems
              Full-stack web app development tools, e.g. React, Node, Bootstrap, Atom
              Experience with: JSON, jQuery, MongoDB, Angular
              Single-page Applications (SPA) concepts and fundamentals
              Excellent communication and people skills
              Fluent in Serbian and English, good in Hungarian, basic German
            </p>
          </div>
        </div>

        <div className="container-fluid blue">
          <div className="container text-center">
            <h2 className="subtitle">Languages</h2>
            <p>
              Fluent in Serbian and English, good in Hungarian, basic German
            </p>
          </div>
        </div>

        <div className="container-fluid white">
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
