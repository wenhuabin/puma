require('scss/common/nav.scss');
import {Component} from 'react';
import { Link } from 'react-router';

class HeaderNav extends Component {
    constructor(props, context){
		super(props, context);
        this.state = {
            isCurrent: -1,
			isListShow: -1,
        };
    }

    setCurrent(key){
		this.setState({isCurrent: key, isListShow: -1});
    }

    setListShow(key){
		this.setState({isListShow: key});
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
              		<div className="nav-list" key={e.key} onMouseLeave={()=>this.setListShow(-1)} style={this.state.isListShow == e.key ? {height: 60 * e.child.length + 'px'} : {height: '60px'}}>
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
				<div className="nav-bar">
					{navs}
				</div>
            </header>
        );
    }
};

module.exports = HeaderNav;
