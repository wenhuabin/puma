require('sass/app.scss');
import React from 'react';
import Component from 'react';

class Home extends React.Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <div className="clo-2">
		    Home!
        </div>
	);
  }
};

module.exports = Home;
