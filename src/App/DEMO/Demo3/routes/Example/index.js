import React from 'react';
import { connect } from 'dva';

class Example extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return(
      <div className="Example">
        Example
      </div>
    )
  }

}

Example.propTypes = {
};

export default connect(state=>state)(Example);
