import 'scss/error.scss';
import {Component} from 'react';
import ErrorBorder from './ErrorBorder';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return (
        <div className="counter">
            <span className="label">点击5次后出发组件 crash：</span>
            <span onClick={this.handleClick} style={{cursor: 'pointer'}}>{this.state.counter}</span>
        </div>
    );
  }
}

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    //array need key
    return [
        <h2 key="error-title" style={{backgroundColor: '#fff', lineHeight: '120px', height: '120px', fontSize: '28px', textAlign: 'center', }}>Error Boundaries Test</h2>,
        <div className="error" key="error-box">
            <ErrorBorder>
                <BuggyCounter />
            </ErrorBorder>
        </div>
    ];
  }
}

export default ErrorComponent;
