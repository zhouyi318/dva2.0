/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:01 
 * @Last Modified by:   周毅 
 * @Last Modified time: 2018-02-07 14:40:01 
 */
import { routerRedux } from 'dva/router';
import { Icon } from 'antd-mobile';

export default {
  /* Models 名称 */
  namespace : 'app',

  /* 状态数据 */
  state : {
    /* NavBar */
    Header: {
      title: '首页',
      icon: <Icon type="left" size="lg" />,
      onLeftClick: () => {
        alert("This is last view ！")
      }
    },
    /* TabBars */
    tabBars: [
      {
        title: '首页',
        key: 'home',
        route: '/'
      }, {
        title: '文档',
        key: 'doc',
        route: '/doc'
      }, {
        title: '案例',
        key: 'example',
        route: '/example'
      }, {
        title: '我的',
        key: 'my',
        route: '/my'
      }
    ],
    /* 初始化 TabBar */
    selectedTab: {
      title: '首页',
      key: 'home'
    }
  },

  /* 异步操作 */
  effects : {
    *changeTabBars({
      payload
    }, {call, put, select}) {
      /* 防止重复加载相同路由 */
      const route = yield select(state => state.app.selectedTab.route);
      if (route === payload.route) 
        return
      /* 保存入参 */
      yield put({type: 'saveTabBars', payload: payload});
      /* 切换 NavBar */
      yield put({type: 'saveHeader', payload: payload});
      /* 路由跳转 */
      yield put(routerRedux.push(`${payload.route}`));
    }
  },

  /* 集合归并 */
  reducers : {
    /* 更换数据源 */
    saveTabBars(state, action) {
      return {
        ...state,
        selectedTab: action.payload
      };
    },
    saveHeader(state, action) {
      const header = Object.assign({},state.Header,{
        title: action.payload.title
      })
      return {
        ...state,
        Header: header
      };
    }
  },

  /* 订阅数据源 */
  subscriptions : {
    setup({dispatch, history}) {}
  }
};
