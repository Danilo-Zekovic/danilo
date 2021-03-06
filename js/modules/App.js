/**
  * Danilo Zekovic
  * Navigation bar that will appear on every views
  * Planing to move the logic to Header.js
  */

import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  // if it does not work try wraping it in setTimeout(...)
  // .measure takes callback as argument
  measureNavbar() {
    this.refs.navigation.measure(this.logNavbarLayout)
  },
  // just printout for .measure()
  logNavbarLayout(ox, oy, width, height, px, py) {
    console.log("ox: " + ox)
    console.log("oy: " + oy)
    console.log("width: " + width)
    console.log("height: " + height)
    console.log("px: " + px)
    console.log("py: " + py)
  },

  getInitialState: function(){
    return {
      transform:"navbar navbar-custom navbar-fixed-top"
    }
  },

  componentDidMount: function() {
      window.addEventListener('scroll', this.handleScroll)
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll)
  },

  handleScroll: function(event) {
    let scrollTop = event.srcElement.body.scrollTop
    if (scrollTop < 2){
      this.setState({
        transform: "navbar navbar-custom navbar-fixed-top"
      });
    }else{
      this.setState({
        transform: "navbar navbar-custom navbar-fixed-top top-nav-collapse"
      });
    }

  },

  render() {
    return (
      <div>
        <nav className={this.state.transform} role="navigation" ref="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand page-scroll" href="/">
                <i className="fa fa-globe"></i>  <span className="light">Danilo</span> Zeković
              </a>
            </div>


            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">

                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

          </div>

        </nav>
        {this.props.children}
        <footer className="footer container-fluid text-center">
          <p>Copyright © Danilo Zeković 2016</p>
          <p>dzv9776@saintjoe.edu</p>
          <p>Personal webpage</p>
          <div>
            <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
              <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Danilo-Zekovic/danilo" target="_blank">
              <i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Danilo-Zekovic" target="_blank">
              <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
            </a>

          </div>
        </footer>
      </div>
    )
  }
})
