require('sass/app.scss');
import {Component, PropTypes} from 'react';

class App extends Component {
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
