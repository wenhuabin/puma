require('scss/app.scss');
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import Nav from 'common/Nav';

class App extends Component {
  constructor(props){
	super(props);
	this.state = {
        navs: [
            {name: '关于我', key: 3, url: '/about'},
            {name: 'Demo', key: 1, url: '', child: [{name: 'Canvas', key: 10, url: '/demo/canvas'}, {name: 'SVG', key: 11, url: '/demo/svg'},{name: 'Echart组件', key: 12, url: '/demo/echart'},{name: 'D3-组件', key: 13, url: '/demo/d3'},{name: 'ChartJS', key: 14, url: '/demo/cjs'}, {name: '通用组件', key: 15, url: '/demo/component'}]},
            {name: '主页', key: 0, url: '/'},
        ],
    };
  }
  //<img src={require('images/bike.png')} />
  render() {
    return (
		<div className="page">
            <Nav navs={this.state.navs}/>
            {this.props.children} 
		</div>
	);
  }
};

App.contextTypes = {
    router: PropTypes.object.isRequired
};

module.exports = App;
