"use strict";
//using netflix career site's styles

var React = require('react');
var NavElt = require('./NavElt.jsx');
var InfoBox = require('./InfoBox.jsx');
var fakeData = require('./fakeData.js');
var pages = require('./pages.js');

var ThemeX = React.createClass({
  getDefaultProps: function(){
    return {
      nav_elt_data: fakeData,
      page: pages
    };
  },
  propTypes: {
    nav_elt_data: React.PropTypes.array,
    pages: React.PropTypes.array
  },
  render: function(){
    var nav_elts = this.props.nav_elt_data.map(function(d){
      return <NavElt data={d.data}/>;
    });
    var pages = this.props.pages.map(function(p){
      return p;
    });
    return (
      <div className="themex-body">

        <header className="themex-header">
          <nav className="themex-nav">
            <ul className="themex-nav-elements">
              {nav_elts}
            </ul>
          </nav>
          <a href="#">
            <h1 className="themex-logo">Your Logo</h1>
          </a>
        </header>

        <div className="themex-hp-image">
          <InfoBox/>
        </div>

        {pages}

      </div>
    );
  }
});

module.exports = ThemeX;
