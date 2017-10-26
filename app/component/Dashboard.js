import 'scss/dashboard.scss';
import {Component} from 'react';

class Dashboard extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
	    <div className="dashboard">
            <img src={require('images/logo.jpg')} />
            <h1>Welcome To Puma</h1>
            <h2>关于本站</h2>
            <ol>
                <li>网站基于&nbsp;Express&nbsp;框架开发, 已经开启&nbsp;HTTPS&nbsp;和&nbsp;HTTP2</li>
                <li>网站架设在&nbsp;Linode&nbsp;上，你可以通过我的&nbsp;<a href="https://www.linode.com/?r=07a0cd76f730fe5f872efa0199fa3c89c95a6f3d" target="_blank">邀请链接</a>&nbsp;注册</li>
                <li style={{display: 'none'}}>科学上网采用&nbsp;BlackSSL，你可以通过我的&nbsp;<a href="https://docs.google.com/forms/d/e/1FAIpQLSc_9u7XYU52hrqBmCfIROZJfIVp5tdZT3GqiWwrKJtyz6KR5w/viewform?entry.723417359=huabintkc9g7" target="_blank">邀请链接</a>&nbsp;提交申请</li>
            </ol>
            <h2>DEMO链接</h2>
            <ul>
                <li><a href="https://huabinwen.com" target="_blank">Express Demo</a></li>
                <li><a href="https://vue.huabinwen.com" target="_blank">Vue Demo</a></li>
            </ul>
            <footer className="footer">{'©'} Copyright 2017 by @wenhuabin. All Right Reserved.</footer>
        </div>	
	);
  }
};

export default Dashboard;
