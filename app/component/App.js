import 'scss/app.scss';
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import Nav from 'common/Nav';
import Dashboard from 'component/Dashboard';
import {connect} from 'react-redux';
import {setProfile} from 'store/common/BaseAction';

class App extends Component{
    constructor(props, context){
      super(props, context);
      this.state = {
          navs: [
              {name: '主页', key: 0, url: '/'},
              {name: '示例', key: 1, url: '', child: [{name: 'Canvas', key: 10, url: '/demo/canvas'}, {name: 'SVG', key: 11, url: '/demo/svg'},{name: 'Echart组件', key: 12, url: '/demo/echart'},{name: 'D3-组件', key: 13, url: '/demo/d3'},{name: 'ChartJS', key: 14, url: '/demo/cjs'}, {name: '通用组件', key: 15, url: '/demo/component'}]},
              {name: '关于我', key: 3, url: '/about'}, ],
      };
	  this.onLoginClick=this.onLoginClick.bind(this);
    }
	
	componentDidMount(){
		let token = JSON.parse(sessionStorage.getItem('token')) 
        if(token && token.email){
			this.props.setToken({uname: token.uname, email: token.email});
		}

	}

    onLoginClick(){
		if(this.props.token.uname){
			sessionStorage.clear();
			this.props.setToken({uname: '', email: ''});
		}else{
			let token = JSON.parse(sessionStorage.getItem('token')) 
            if(token && token.email){
				this.props.setToken({uname: token.uname, email: token.email});
			}else{
				this.context.router.push('/login');
			}
		}
    }

    render() {
      return (
      	<div className="page">
              <Nav navs={this.state.navs} uname={this.props.token.uname} onLoginClick={this.onLoginClick}/>
              {this.props.children || <Dashboard />} 
      	</div>
      );
    }
};

App.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStore = (state) => {
    return {
        token: state.token,
    };
};

const mapDispatch = (dispatch) => {
    return {
		setToken: function(token){
			dispatch(setProfile(token));
		}
    };
};

export default App = connect(
        (state) => mapStore(state.token),
       	mapDispatch 
)(App);
