import {Component} from 'react';


class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        };
    }
    componentDidMount() {
        this. setState({ val: this. state. val + 1});
        console. log( this. state. val); // 第 1 次 输出
        this. setState({ val: this. state. val + 1});
        console. log( this. state. val); // 第 2 次 输出
        setTimeout(() => {
            this. setState({ val: this. state. val + 1});
            console. log( this. state. val); // 第 3 次 输出
            this. setState({ val: this. state. val + 1});
            console. log( this. state. val); // 第 4 次 输出
        }, 0);
    }
    render() {
      return (
        <div className="setstate" style={{display: 'none'}}>
           setState 测试
        </div>
      );
    }
    
};

export default SetState;
