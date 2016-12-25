require('sass/app.scss');
import {Component} from 'react';

class Home extends Component {
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
