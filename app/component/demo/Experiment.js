import 'scss/experiment.scss';
import {Component} from 'react';
import SetState from 'component/demo/SetState';

class Experiment extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.parentClick = this.parentClick.bind(this);
        this.childOneClick = this.childOneClick.bind(this);
        this.childTwoClick = this.childTwoClick.bind(this);
        this.childInputClick = this.childInputClick.bind(this);
    }
    parentClick(e){
        console.log('parent dispatch');
        console.log('parent', e.target);
        console.log('parent', e.currentTarget);
    }
    childOneClick(e){
        console.log('child1', e.target);
        console.log('child1', e.currentTarget);
    }
    childTwoClick(e){
        console.log('child2',e.target);
        console.log('child2',e.currentTarget);
    }
    childInputClick(e){
        console.log(e.target.value);
        console.log(e.currentTarget.value);
    }
    render() {
      return (
        <div className="experiment">
            <h2>测试页面</h2>
            <div className="parent-listener" onClick={this.parentClick}>
                <div className="child-listener" onClick={this.childOneClick}>第一个子元素</div>
                <div className="child-listener" onClick={this.childTwoClick}>第二个子元素</div>
                <input className="child-listener" onChange ={this.childInputClick}/>
                
            </div>
            <SetState />
        </div>
      );
    }
    
};

export default Experiment;
