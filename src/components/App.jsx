import React, { Component } from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
          app 组件的内容
          <h2><Link to="/news_details/1">news1</Link></h2>
          <h2><Link to="/news_details/2">news2</Link></h2>
          <h2><Link to="/usercenter">usercenter</Link></h2>
          {this.props.children}
      </div>
    );
  }
}

export default App;
