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
				<li>基于&nbsp;React&nbsp;技术栈（包括&nbsp;react-router、Redux），前后端分离&nbsp;SPA&nbsp;开发</li>
				<li>基于&nbsp;Vue&nbsp;技术栈（包括&nbsp;vue-router、Vuex），前后端分离&nbsp;SPA&nbsp;开发和多页开发</li>
				<li>基于&nbsp;Node.js&nbsp;和&nbsp;Express&nbsp;框架开发后端服务，包括前端页面渲染、RestFul&nbsp;风格接口开发</li>
				<li>熟悉&nbsp;jQuery，熟悉&nbsp;Jinjia2/artTemplate&nbsp;等前端模板，熟悉&nbsp;LESS/SASS 等&nbsp;CSS&nbsp;预处理器</li>
				<li>熟悉基于&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;进行移动端页面适配</li>
				<li>熟悉基于&nbsp;chartJS&nbsp;进行前端数据可视化</li>
				<li>组件化、模块化和工程化开发，Webpack&nbsp;配置和优化、Nginx&nbsp;配置、HTTPS（HTTP2）配置部署</li>
            </ol>
			<h2>项目经历</h2>
			<ol>
				<li>个人：
                    <a href="https://github.com/wenhuabin/teddy" target="_blank" title="基于&nbsp;Express/Mysql/Redis/jQuery/Webpack&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">Teddy&nbsp;项目（Express）</a>
				    <a href="https://github.com/wenhuabin/merlin" target="_blank" title="基于&nbsp;Vue/Vuex/vue-router/Webpack/SASS&nbsp;技术栈，前后端分离">Merlin&nbsp;项目（Vue）</a>
				    <a href="https://github.com/wenhuabin/puma" target="_blank" title="基于&nbsp;React/react-redux/react-router/SASS/Webpack&nbsp;技术栈">Puma&nbsp;项目（React）</a>
                </li>
				<li className="hide">蔚来汽车：<a href="https://login.nio.com/login" target="_blank" title="基于&nbsp;Java Spring/JSP/jQuery/SASS&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">单点登录系统 </a><span title="基于&nbsp;Express/EJS&nbsp;模板&nbsp;/jQuery&nbsp;技术栈，通过&nbsp;rem&nbsp;和屏幕&nbsp;dpr&nbsp;适配移动版页面">LifeStyle项目</span><span title="基于&nbsp;PHP/Vue/Vuex/vue-router/Webpack/SASS&nbsp;技术栈，前后端分离">车辆后台管理系统</span></li>
				<li>小熊快跑：<a href="https://guanjia.xxkuaipao.com" target="_blank" title="基于&nbsp;React/react-redux/react-router/SASS/Webpack技术栈，前后端分离">小熊管家</a><span title="基于&nbsp;Flask/Jinjia2/LESS&nbsp;技术栈">包月健身管理后台/商家后台</span></li>
			</ol>
		    <footer className="footer">{'©'}  Copyright 2017 by @wenhuabin. All Right Reserved.</footer>
		</div>
	);
  }
};

export default About;
