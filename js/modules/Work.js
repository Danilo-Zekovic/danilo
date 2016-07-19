import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Experience from './Experience'

export default React.createClass({
  render() {
    return (
      <div>
        <Header
          title={'Work'}
          image={'http://2.bp.blogspot.com/-GIS3_Ms5uHg/T8pLfIYZGNI/AAAAAAAAT48/FCFXTOdBsJs/s1600/young-justice-nightwing-robin-wallpaper.jpg'}
        />

      <div className="container-fluid white">
          <div className="container text-center">
            <h2 className="subtitle">Nightwing Report</h2>
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

          <Experience
            title="O’Reilly OSCON"
            date="May 2016"
            jobTitle="Tutorial"
            position="Co-Presenter"
            technologies="JavaScript, React, Node.js, Express, Babel, Webpack, GrpahQL"
            project="Desktop app that has as input and output a XML file. It
            translates words in the XML file from/to English or Spanish. I was
            provided with CSV file that contained English words and its
            translations to Spanish. Input files contained at least 20k or 30k
            words that needed to be translated."
          />

          <Experience
            title="HintTech"
            date="May-June 2015"
            jobTitle="Internship"
            position="Intern"
            technologies="C#, Visual Studio, JavaScript"
            project="I am focused on keeping up with new technologies. The notion of a
            “web page” is undergoing revolutionary change, lines are blurring
            between client and server, and the importance of JavaScript
            continues to grow. I cannot predict how these things will come
            together, but I know this is the path that I want to be on."
          />

          <Experience
            title="DMS Schneider Electic"
            date="June 2014"
            jobTitle="Internship"
            position="Intern"
            technologies="Java, Eclipse, XML"
            project="Desktop app that has as input and output a XML file. It
            translates words in the XML file from/to English or Spanish. I was
            provided with CSV file that contained English words and its
            translations to Spanish. Input files contained at least 20k or 30k
            words that needed to be translated."
          />


        </div>

      </div>
    )
  }
})
