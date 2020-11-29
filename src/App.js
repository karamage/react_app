import React, { Component } from 'react';
// import Rect from './Rect'
import { connect } from 'react-redux';
import './App.css';

// ステートのマッピング
function mappingState(state) {
  return state;
}

// Appコンポーネント
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

// ストアのコネクト
App = connect()(App);

// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize: "20px",
    padding: "20px 5px"
  }

  render() {
    return (
      <p style={this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}
// ストアのコネクト
Message = connect(mappingState)(Message);

// ボタン表示のコンポーネント
class Button extends Component {
  style = {
    fontSize: "16px",
    padding: "5px 10px"
  }

  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでディスパッチを実行
  doAction(e) {
    if (e.shiftKey) {
      this.props.dispatch({ type: 'DECREMENT' });
    } else {
      this.props.dispatch({ type: 'INCREMENT' });
    }
  }

  render() {
    return (
      <button style={this.style} onClick={this.doAction}>click</button>
    );
  }
}

// ストアのコネクト
Button = connect()(Button);

/*
let data = {title: 'Title', message: 'this is sample message.'};

const SampleContext = React.createContext(data);

class App extends Component {
  newdata = {title:'新しいタイトル',
    message:'これは新しいメッセージです。'};
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}
*/

export default App;
