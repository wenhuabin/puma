import 'scss/dashboard.scss';

function Dashboard(){
    return (
	    <div className="dashboard">
            <img src={require('images/logo.jpg')} />
            <h1>Welcome To Puma</h1>
            <h2>关于本站</h2>
            <ol>
                <li>网站基于&nbsp;Express&nbsp;和&nbsp;React&nbsp;框架开发, 已经开启&nbsp;HTTPS&nbsp;和&nbsp;HTTP2</li>
                <li>网站架设在&nbsp;Linode&nbsp;上，你可以通过我的&nbsp;<a href="https://www.linode.com/?r=07a0cd76f730fe5f872efa0199fa3c89c95a6f3d" target="_blank">邀请链接</a>&nbsp;注册</li>
            </ol>
            <h2>DEMO链接</h2>
            <ul>
                <li><a href="https://huabinwen.com" target="_blank">Express Demo</a></li>
                <li><a href="https://vue.huabinwen.com" target="_blank">Vue Demo</a></li>
            </ul>
            <footer className="footer">{'©'} Copyright 2018 by @wenhuabin. All Right Reserved.</footer>
            {false && <div dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} />}
        </div>	
	);
}

export default Dashboard;
