import 'scss/coming.scss';
import {Component} from 'react';

class ComingSoon extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <div className="coming-soon">
            <img src={require('images/logo.jpg')} />
		    SORRY, COMING SOON!
        </div>
	);
  }
};
export default ComingSoon;
