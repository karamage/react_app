import React, { Component } from 'react';
import Rect from './Rect'
import './App.css';

class App extends Component {
  data = [];

  msgStyle = {
    fontSize: "20px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
  }
  area = {
    width: "500px",
    height: "500px",
    border: "1px solid blue"
  }

  constructor(props) {
    super(props);
    this.state = {
      list: this.data
    };
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    let x = e.pageX;
    let y = e.pageY;
    this.data.push({x:x, y:y});
    this.setState({
      list: this.data
    });
  }

  draw(d) {
    let s = {
      position: "absolute",
      left: (d.x - 25) + "px",
      top: (d.y - 25) + "px",
      width: "50px",
      height: "50px",
      backgroundColor: "#66f3"
    };
    return <div style={s}></div>;
  }

  /*
  render() {
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>;
  }
  */

  render() {
    return <div>
      <h1>React</h1>
      <Message title="Children!">
        これはコンポーネント内のコンテンツです。
        丸でテキストを分割し、リストにして表示します。
        改行は必要ありません。
      </Message>
    </div>
  }
}

class Message extends Component {
  li = {
    fontSize: "16px",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }

  render() {
    let content = this.props.children;
    let arr = content.split('。');
    let arr2 = [];
    for(let i=0; i < arr.length; i++) {
      if (arr[i].trim() != '') {
        arr2.push(arr[i]);
      }
    }
    let list = arr2.map((value,key) => (
      <li style={this.li} key={key}>{value}.</li>
    ));
    return <div>
      <h2>{this.props.title}</h2>
      <ol>{list}</ol>
    </div>
  }
}

export default App;
