require('./component.scss');
import React from 'react';
import Component from 'react';

class Hello extends React.Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
		<div className="first">
            <div className="clo-1">
			    hello world!
            </div>
            <img src={require('./images/bike.png')} />
            <div className="clo-2">
			    hello world!
            </div>
		</div>
	);
  }
};

module.exports = Hello;
