import React, { Component } from 'react';

class Newdetails extends Component {
  render() {
    return (
      <div>
          Newdetails 组件的内容{this.props.params.newid}
      </div>
    );
  }
}

export default Newdetails;
