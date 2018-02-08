import React from 'react';
import { connect } from 'dva';

class My extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return(
      <div className="demo">
        My
      </div>
    )
  }

}

My.propTypes = {
};

export default connect(state=>state)(My);
