import React from 'react'
import ReactDOM from 'react-dom'
import {measure} from 'react'

var Foo = React.createClass({

  measureWelcome() {
    setTimeout(this.refs.welcome.measure(this.logWelcomeLayout));
  },

  logWelcomeLayout(ox, oy, width, height, px, py) {
    console.log("ox: " + ox);
    console.log("oy: " + oy);
    console.log("width: " + width);
    console.log("height: " + height);
    console.log("px: " + px);
    console.log("py: " + py);
  },

  getInitialState: function(){
    return {
      transform:false
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
        transform: "foobar"
      });
    }else{
      this.setState({
        transform: "false"
      });
    }

  },

  render: function() {
    return (
      <div onscroll={this.measureWelcome}>

          <h1>About</h1>
          <p>Danilo Zekovic</p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <div className={this.state.transform} ref="welcome" >Hello {this.props.name}</div>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>Danilo Zekovic</p>

          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>Danilo Zekovic</p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>Danilo Zekovic</p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>Danilo Zekovic</p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>Danilo Zekovic</p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <p>foo bar fo bar </p>
          <div className={this.state.condition ? "foobar" :""}  >Hello {this.props.name}</div>
      </div>
    )
  }
});


export default React.createClass({
  render() {
    return (
      <div>
        <Foo />
        <h1>About</h1>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>Danilo Zekovic</p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
        <p>foo bar fo bar </p>
      </div>
    )
  }
})
