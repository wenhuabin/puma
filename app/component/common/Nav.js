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
                {name: '关于我', key: 3, url: '/about'},
                {name: 'Demo', key: 1, url: '', child: [{name: 'Canvas', key: 10, url: '/demo/canvas'}, {name: 'SVG', key: 11, url: '/demo/svg'},{name: 'Echart组件', key: 12, url: '/demo/echart'},{name: 'D3-组件', key: 13, url: '/demo/d3'},{name: 'ChartJS', key: 14, url: '/demo/cjs'}, {name: '通用组件', key: 15, url: '/demo/component'}]},
                {name: '主页', key: 0, url: '/'},
            ],
        };
    }

    setCurrent(key){
		this.setState({isCurrent: key, isListShow: -1});
    }

    setListShow(key){
		this.setState({isListShow: key});
	}

    toggleShowChild(key){
        var tmp = this.isChildShow;
        tmp.includes(key) ? tmp.splice(tmp.indexOf(key), 1) : tmp.push(key)
		this.setState({isChildShow: tmp});
    }
      
    render() {
		let navs = [];
		let cnavs = [];
		this.props.navs.forEach((e, index)=>{
			if(!e.child){
				navs.push(
              		<div className="nav-list" key={e.key}>
              		    <Link className={this.state.isCurrent == e.key ? "nav icurrent" : "nav"} onClick={()=>this.setCurrent(e.key)} to={e.url}>{e.name}</Link>
        	  		</div>
				);
			}else{
				cnavs = [];
				e.child.forEach((c, cindex)=>{
					cnavs.push(
              		     <li className={this.state.isCurrent == c.key ? "item current" : "item"} onClick={()=>this.setCurrent(c.key)} key={c.key}><Link to={c.url}>{c.name}</Link></li>
					);
				});
				navs.push(
              		<div className="nav-list" key={e.key}>
              		    <div className={this.state.isCurrent.toString()[0] == e.key ? "nav icurrent" : "nav"} onClick={()=>this.setCurrent(e.key)} onMouseOver={()=>this.setListShow(e.key)}>{e.name}</div>
              		    <ul className={this.state.isListShow == e.key ? 'items show': 'items'}>
							{cnavs}
              		    </ul>
        	  		</div>
				);
			}

		});
        return (
            <header className="header">
          		<img className="logo" src={require('images/logo.jpg')} />
                <div className="brand">SpaceX</div>
                <div className="logout">退出登录</div>
				{navs}
            </header>
        );
    }
};

module.exports = HeaderNav;
