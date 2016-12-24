require('sass/app.scss');
import React from 'react';
import Component from 'react';

class About extends React.Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <div className="clo-2">
		    About Me!
        </div>
	);
  }
};

module.exports = About;
