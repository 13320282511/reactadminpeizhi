import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  const userName = {
    name: 'wudi'
  }
  return (
    <div style={{width:'100px',backgroundColor:'#000'}}>
      <h1>
      555555
      </h1>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
