require('sass/app.scss');
import React from 'react';
import {Component, PropTypes} from 'react';

class App extends React.Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
		<div className="first">
            {this.props.children} 
            <img src={require('images/bike.png')} />
		</div>
	);
  }
};

App.contextTypes = {
    router: PropTypes.object.isRequired

};

module.exports = App;
