/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:11 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 09:42:50
 */

import React from 'react';
import {connect} from 'dva';
import { List, Icon } from 'antd-mobile';
import Myicon from 'components/Myicon';

import styles from './index.less';


const Item = List.Item;
const Brief = Item.Brief;

class Home extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.setNavBar()
  }

  componentDidMount() {
    /* 防止返回重复请求 */
    this.props.app.initData && this.props.app.userAccountList ? null : this.sendInitData()
  }

  render() {
    const {initData, userAccountList} = this.props.app
    return (
      <div className={styles.home}>
          {
            initData?
            <List className="homeUserList">
              <Item extra={initData.name}>姓名</Item>
              <Item extra={initData.sex === 0 ? "男" : "女"}>性别</Item>
              <Item extra={initData.id}>工号</Item>
              <Item extra={initData.mobile}>手机号</Item>
              <Item extra={initData.email}>邮箱</Item>
            </List>:null
          }
        
          <List renderHeader={() => '账户交易信息'} className="home">
            <div style={{height: window.WinHeight - 220 - 45 - 40,overflowY: 'scroll'}}>
              {
                userAccountList?userAccountList.map((item,index)=>
                  <Item key={index} className="demo2Horizontal" align="top" 
                    thumb={<Myicon type={item.icon} />} multipleLine 
                    onClick={this.handleIntoDetails(item)}
                    arrow="horizontal" >
                    {item.organization} 
                    <Brief>{item.time}</Brief>
                    <Brief>RMB ¥{item.money}</Brief>
                  </Item>
                ):null
              }
            </div>
          </List>
       
      </div>
    )
  }

  /* 设置导航头 */
  setNavBar = () => {
    this.props.dispatch({
      type: 'app/setNavBar',
      Header: {
        title: "Demo2",
        icon: <Icon type="left" />
      }
    })
  }

  /* 初始化请求 */
  sendInitData = () => {
    this.props.dispatch({
      type: 'app/getInitData',
      payload: {
        transId: "Demo2Init",
        body: {}
      }
    }).then(()=>{
      const userInfo = this.props.app.initData

      this.props.dispatch({
        type: 'app/getUserAccountList',
        payload: {
          transId: "UserAccountList",
          body: {
            name: userInfo.name,
            id: userInfo.id
          }
        }
      })

    })
  }

  /* 进入列表详情 */
  handleIntoDetails = (item) => {
    return () => {
      this.props.history.push({
        pathname: '/details',
        state: item
      })
    }
  }

}

Home.propTypes = {};

export default connect(state => state)(Home);
