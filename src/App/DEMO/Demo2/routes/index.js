/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:39 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-07 16:16:01
 */
import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';
import Header from 'components/Header';
import Myicon from 'components/Myicon';
import styles from './index.less'

class App extends React.Component {
  constructor(){
    super()
    window.WinHeight = window.innerHeight
    this.HtmlFontSize()
  }

   //计算跟字体大小 REM 对根元素
   HtmlFontSize = () => {
    let docWidth = document.documentElement.clientWidth;
    let htmlDom = document.getElementsByTagName("html")[0]
    let countFontSize = Math.round(10 * (docWidth/375));
    if(countFontSize >= 16){
      return htmlDom.style.fontSize = '16px'
    }
    htmlDom.style.fontSize = countFontSize + 'px';
  };

  render(){
    return(
      <div className={styles.demo2}>
        <Header className={styles.header} {...this.props.app.Header}/>
        <div className={styles.main}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

App.propTypes = {};

export default connect(state=>state)(App);
