require('scss/login.scss');
import {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {verifyEmail} from 'utils/utils';
import {setProfile} from 'store/common/BaseAction';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            email: '',
            pwd: '',
            errMsg: '',
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPwdChange= this.onPwdChange.bind(this);
        this.onLoginClick= this.onLoginClick.bind(this);
        this.login= this.login.bind(this);
        
    }


    onEmailChange(e){
        this.setState({email: e.currentTarget.value});
    }
      
    onPwdChange(e){
        this.setState({pwd: e.currentTarget.value});
    }

    onLoginClick(){
        if(!this.state.email){
            this.setState({errMsg: '请输入邮箱！'});
            return;
        }else if(!verifyEmail(this.state.email)){
            this.setState({errMsg: '请输入正确邮箱！'});
            return;
        }else if(!this.state.pwd){
            this.setState({errMsg: '请输入密码！'});
            return;
        }else{
            this.setState({errMsg: ''});
            this.login();
        }
    }

    login(){

        var formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.pwd);
        
        fetch('https://huabinwen.com/login', {
            method: 'POST',
            credentials: 'include',
            body: formData
        }).then(response => response.json())
        .then((data)=>{
            if(data && data.status === 0){
                this.setState({errMsg: '登录成功！'});
			    sessionStorage.setItem('token', JSON.stringify(data.data)) 
				this.props.setToken({uname: data.data.uname, email: data.data.email});
                setTimeout(()=>{
				    this.context.router.push('/');
                }, 2000);
            }else{
                this.setState({errMsg: data && data.msg ? data.msg : '登录失败！'});
            }
            
        }).catch((err)=>{
            if(err != null && err != undefined){
                this.setState({errMsg: data && data.msg ? data.msg : '登录失败！'});
            }
        });
    }

    render() {
      return (
          <div className="login-box">
              <img src={require('images/logo.jpg')} />
              <div className="hint">Welcome to  Puma</div>
              <div className="input-line">
                  <input
                    className="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                    placeholder="Email"/>
              </div>
              <div className="input-line">
                  <input
                    className="pwd"
                    type="password"
                    value={this.state.pwd}
                    onChange={this.onPwdChange}
                    placeholder="Password"/>
              </div>
              <div className="error">{this.state.errMsg}</div>
              <button className="login-in" onClick={this.onLoginClick}>SIGN IN</button>
              <a className="signup" href="https://wenhuabin.com/signup">SIGN UP</a>
          </div>
      );
    }
};

Login.contextTypes = {
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

module.exports = connect(
        (state) => mapStore(state.token),
       	mapDispatch 
)(Login);
