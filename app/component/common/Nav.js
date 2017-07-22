require('scss/common/nav.scss');
import {Component} from 'react';
import { Link } from 'react-router';

class HeaderNav extends Component {
    constructor(props, context){
		super(props, context);
        this.state = {
            isCurrent: -1,
            isChildShow: [],
			isListShow: -1,
            navs: [
                {name: '主页', key: 0, url: '/'},
                {name: 'Demo', key: 1, url: '', child: [{name: '图形', key: 10, url: '/', child: [{name: 'Canvas', key: 110, url: '/canvas'}, {name: 'SVG', key: 111, url: '/'}]},{name: 'Echart组件', key: 11, url: '/echart'},{name: 'D3-组件', key: 12, url: '/d3'},{name: 'ChartJS', key: 13, url: '/cjs'}, {name: '通用组件', key: 14, url: '/component'}]},
                {name: 'About', key: 3, url: '/about'},
            ],
        };
    }

    setCurrent(key){
		this.setState({isCurrent: key});
    }

    setListShow(key){
		console.log(key);
		this.setState({isListShow: key}, ()=>{
			console.log('set ', this.state.isListShow);
		});
	}

    toggleShowChild(key){
        var tmp = this.isChildShow;
        tmp.includes(key) ? tmp.splice(tmp.indexOf(key), 1) : tmp.push(key)
		this.setState({isChildShow: tmp});
    }
      
    render() {
		console.log('render ', this.state.isListShow);
        return (
            <header className="header">
          		<img className="logo" src={require('images/logo.jpg')} />
                <div className="brand">SpaceX</div>
                <div className="logout">退出登录</div>
              	<div className="nav-list">
              	    <Link className="nav" to={'/about'}>关于我</Link>
        	  	  </div>
              	  <div className="nav-list">
              	      <div className="nav" onMouseOver={()=>this.setListShow(2)}>设置</div>
              	      <ul className={this.state.isListShow == '2' ? 'items show': 'items'} onBlur={()=>this.setListShow(-1)}>
              	          <li className="item"><Link to={'/cjs'}>ChartJS</Link></li>
              	          <li className="item"><Link to={'/canvas'}>Canvas</Link></li>
              	      </ul>
        	  	  </div>
              	  <div className="nav-list">
              	      <div className="nav" onMouseOver={()=>this.setListShow(3)}>组件</div>
              	      <ul className={this.state.isListShow == '3' ? 'items show': 'items'} onBlur={()=>this.setListShow(-1)}>
              	          <li className="item"><Link to={'/cjs'}>ChartJS</Link></li>
              	          <li className="item"><Link to={'/canvas'}>Canvas</Link></li>
              	      </ul>
        	  	  </div>
              	  <div className="nav-list">
                  	  <Link className="nav" to={'/about'}>首页</Link>
        		  </div>
            </header>
        );
    }
};

module.exports = HeaderNav;
