import React from 'react';
import { connect } from 'dva';

class Order extends React.Component {
  constructor(props){
    super(props);
    this.props.dispatch({
      type:'order/requestOrder'
    });
  }
  render() {
    return (
      <div>Order页面</div>
    )
  }
}


export default connect()(Order);
