require('scss/common/nav.scss');
import {Component} from 'react';

class HeaderNav extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
        <header className="header">
  			<img className="logo" src={require('images/logo.jpg')} />
            <div className="brand">SpaceX</div>
            <div className="logout">退出登录</div>
            <div className="setting-box">
                <div className="setting">设置</div>
                <ul className="options">
                    <li className="option">个人信息</li>
                    <li className="option">修改密码</li>
                </ul>
			</div>
        </header>
	);
  }
};

module.exports = HeaderNav;
