import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header
          title={'Work'}
          image={'http://2.bp.blogspot.com/-GIS3_Ms5uHg/T8pLfIYZGNI/AAAAAAAAT48/FCFXTOdBsJs/s1600/young-justice-nightwing-robin-wallpaper.jpg'}
        />

        <div className="container-fluid">
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

      </div>
    )
  }
})
