require('sass/app.scss');
import {Component} from 'react';

class ComingSoon extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <div className="clo-2">
		    Coming Soon !
        </div>
	);
  }
};

module.exports = ComingSoon;
