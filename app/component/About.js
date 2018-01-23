import 'scss/about.scss';
import {Component} from 'react';

class About extends Component {
  constructor(props){
	super(props);
  }
	
  render() {
    return (
		<div className="about">
			<h2>关于我</h2>
            <p className="my-info">Wen&nbsp;Huabin，前端开发工程师</p>
            <p>Email：<a href="mailto:huabinwen@gmail.com">huabinwen@gmail.com</a></p>
            <p>Github：<a href="https://github.com/wenhuabin">wenhuabin</a></p>
			<h2>技术能力</h2>
			<ol>
				<li>jQuery / SCSS / LESS / ES6-8 </li>
				<li>React&nbsp;技术栈（包括&nbsp;React.js、react-router、Redux）</li>
				<li>Vue&nbsp;技术栈（包括&nbsp;Vue.js、vue-router、Vuex）</li>
				<li>Node.js / Express 开发</li>
				<li>Python / Flask 开发</li>
				<li>基于&nbsp;REM&nbsp;移动端适配</li>
				<li>数据可视化 / 地图集成</li>
				<li>前端组件化、模块化和工程化开发</li>
				<li>Webpack&nbsp;配置和优化、前端性能优化</li>
				<li>Nginx / HTTPS（HTTP2）/ BBR </li>
				<li>了解小程序开发；了解 PWA 技术</li>
				<li>关注前端安全</li>
            </ol>
			<h2>项目经历</h2>
			<ol>
				<li>个人：
                    <a href="https://github.com/wenhuabin/teddy" target="_blank" title="基于&nbsp;Express/Mysql/Redis/jQuery/Webpack&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">Teddy&nbsp;项目（Express）</a>
				    <a href="https://github.com/wenhuabin/merlin" target="_blank" title="基于&nbsp;Vue/Vuex/vue-router/Webpack/SASS&nbsp;技术栈，前后端分离">Merlin&nbsp;项目（Vue）</a>
				    <a href="https://github.com/wenhuabin/puma" target="_blank" title="基于&nbsp;React/react-redux/react-router/SASS/Webpack&nbsp;技术栈">Puma&nbsp;项目（React）</a>
                    <a href="#">微信小程序</a>
                    <a href="#">PWA 项目</a>
                </li>
				<li className="hide">蔚来汽车：<a href="https://login.nio.com/login" target="_blank" title="基于&nbsp;Java Spring/JSP/jQuery/SASS&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">单点登录系统 </a><span title="基于&nbsp;Express/EJS&nbsp;模板&nbsp;/jQuery&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">LifeStyle项目</span><span title="基于&nbsp;PHP/Vue/Vuex/vue-router/Webpack/SASS&nbsp;技术栈，前后端分离">车辆后台管理系统</span></li>
				<li>小熊快跑：<a href="https://guanjia.xxkuaipao.com" target="_blank" title="基于&nbsp;React/react-redux/react-router/SASS/Webpack技术栈，前后端分离">小熊管家</a><span title="基于&nbsp;Flask/Jinjia2/LESS&nbsp;技术栈">包月健身管理后台/商家后台</span></li>
			</ol>
		    <footer className="footer">{'©'}  Copyright 2018 by @wenhuabin. All Right Reserved.</footer>
		</div>
	);
  }
};

export default About;
