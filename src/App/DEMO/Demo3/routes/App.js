import React from 'react';
import { connect } from 'dva';
import { NavBar, TabBar, Icon } from 'antd-mobile';
import Header from 'components/Header';
import Myicon from 'components/Myicon';

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
    console.log(`跟字体：1REM= ${countFontSize}PX`)
  };

  render(){
    return(
      <div className="demo">
        <Header className="demoHeader" {...this.props.app.Header} />
        <div style={{ position: 'fixed', height: window.WinHeight - 45, width: '100%', top: '45px' }}>
          <TabBar unselectedTintColor="#108ee9" tintColor="tomato" barTintColor="white">
            {
              this.props.app.tabBars.map(item=>
                <TabBar.Item 
                  title={item.title} 
                  key={item.key} 
                  icon={<Myicon type={item.key} color="#108ee9" />}
                  selected={this.props.app.selectedTab.key === item.key}
                  selectedIcon={<Myicon type={item.key} color="tomato" />}
                  onPress={this.handlePress(item)}
                  data-seed="logId">
                  {this.props.children}
                </TabBar.Item>
              )
            }
          </TabBar>
        </div>
      </div>
    )
  }

  /* 切换 TabBar */
  handlePress = (item) => {
    return()=>{
      this.props.dispatch({
        type:'app/changeTabBars',
        payload:item
      })
    }
  }

}

App.propTypes = {};

export default connect(state=>state)(App);
