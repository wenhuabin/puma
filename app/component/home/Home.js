require('sass/app.scss');
import {Component} from 'react';
import {connect} from 'react-redux';
import {setProfile} from './HomeAction';

class Home extends Component {
  constructor(props){
	super(props);
  }

	
  render() {
    return (
        <div className="clo-2">
		    Home!
            {' ' + this.props.pro.name + ' ' + this.props.pro.sex + ' ' + this.props.pro.age} 
            <button onClick={()=>this.props.setPro({name: 'hj', sex: 'female', age: '26'})}>修改</button>
        </div>
	);
  }
};

const mapStateToDetailProps = (state) => {
    return {
        pro: state.profile,
    };
};

const mapDispatchToDetailProps = (dispatch) => {
    return {
        setPro: (pro)=>{
            dispatch(setProfile(pro));
        },
    };
};

module.exports = connect(
        (state) => mapStateToDetailProps(state.home),
        mapDispatchToDetailProps
)(Home);
