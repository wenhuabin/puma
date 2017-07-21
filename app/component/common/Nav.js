require('scss/app.scss');
import {Component} from 'react';

class HeaderNav extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <header className="header">
		    About Me!
        </header>
	);
  }
};

module.exports = HeaderNav;
