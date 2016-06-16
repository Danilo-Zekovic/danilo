import React from "react"
import { Link } from "react-router"

import NavLink from './NavLink'

const brandName = "Danilo Zekovic"
const brand = <span>{brandName}</span>

const NavHeader = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
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
  )}
})

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <NavHeader/>
    )
  }
}
