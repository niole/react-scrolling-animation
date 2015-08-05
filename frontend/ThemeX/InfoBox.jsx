"use strict";

var React = require('react');

var InfoBox = React.createClass({
  render: function(){
    return (
      <div className="themex-info-container">

        <div className="themex-info-box">
          <h1 className="themex-title hp-text">Your Header</h1>
          <p className="themex-hp-text hp-text">
              I met a traveller from an antique land
            Who said: Two vast and trunkless legs of stone
            Stand in the desert. Near them, on the sand,
            Half sunk, a shattered visage lies, whose frown,
            And wrinkled lip, and sneer of cold command,
          </p>
         </div>

       <div className="themex-info-box">
          <input type="text" className="themex-search"/>
            <p className="themex-hp-text hp-text">
                I met a traveller from an antique land
              Who said: Two vast and trunkless legs of stone
              Stand in the desert. Near them, on the sand,
              Half sunk, a shattered visage lies, whose frown,
              And wrinkled lip, and sneer of cold command,
            </p>
        </div>

      </div>
    );
  }
});

module.exports = InfoBox;
