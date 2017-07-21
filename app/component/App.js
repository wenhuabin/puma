require('scss/app.scss');
import {Component} from 'react';
import {PropTypes} from 'prop-types';

class App extends Component {
  constructor(props){
	super(props);
  }
  //<img src={require('images/bike.png')} />
  render() {
    return (
		<div className="first">
            {this.props.children} 
		</div>
	);
  }
};

App.contextTypes = {
    router: PropTypes.object.isRequired

};

module.exports = App;
