/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:11 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 09:41:07
 */

import React from 'react';
import {connect} from 'dva';
import { List, Icon } from 'antd-mobile';
import Myicon from 'components/Myicon';

import styles from './index.less';

const Item = List.Item;
const Brief = Item.Brief;

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.params = props.location.state
  }

  componentWillMount() {
    this.setNavBar()
  }

  render() {
    return (
      <div className={styles.home}>
       <List className="homeUserList">
          <Item extra={this.params.organization}>消费机构</Item>
          <Item extra={this.params.time}>时间</Item>
          <Item extra={this.params.money}>金额</Item>
        </List>
      </div>
    )
  }

  /* 设置导航头 */
  setNavBar = () => {
    this.props.dispatch({
      type: 'app/setNavBar',
      Header: {
        title: "Details",
        icon: <Icon type="left" />,
        onLeftClick: ()=>{
          this.props.history.goBack()
        }
      }
    })
  }

}

Details.propTypes = {};

export default connect(state => state)(Details);
