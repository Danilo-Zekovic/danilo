/*
  ** Common "Navbar" header used by all views
*/

import React from "react"
import { Link } from "react-router"
import ReactDOM from "react-dom"

import NavLink from './NavLink'

const NavHeader = React.createClass({
  measureNavbar() {
    setTimeout(this.refs.navigation.measure(this.logNavbarLayout));
  },

  logNavbarLayout(ox, oy, width, height, px, py) {
    console.log("ox: " + ox);
    console.log("oy: " + oy);
    console.log("width: " + width);
    console.log("height: " + height);
    console.log("px: " + px);
    console.log("py: " + py);
  },

  getInitialState: function(){
    return {
      transform:"navbar navbar-custom navbar-fixed-top"
    }
  },

  componentDidMount: function() {
      window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount: function() {
      window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    console.log("just making sure " + this.transform);
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop/3 - 60);
    console.log(itemTranslate + " <=========> " + scrollTop);
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
              <a className="navbar-brand page-scroll" href="#page-top">
                <i className="fa fa-play-circle"></i>  <span className="light">Start</span> Bootstrap
              </a>
            </div>


            <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
              <ul className="nav navbar-nav">

                <li className="hidden">
                  <a href="#page-top"></a>
                </li>
                <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
              </ul>
            </div>

          </div>

        </nav>
        {this.props.children}
      </div>
    )
  }
})

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <NavHeader />
    )
  }
}
