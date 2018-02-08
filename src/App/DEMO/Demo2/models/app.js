/*
 * @Author: 周毅
 * @Date: 2018-02-07 14:39:25
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-07 15:56:20
 */

import * as Ajax from '../services/index';

export default {
    /* Models 名称 */
    namespace : 'app',

    /* 状态数据 */
    state : {
        Header: {}
    },

    /* 异步操作 */
    effects : {
        *getInitData({
            payload
        }, {call, put}) {
            const data = yield call(Ajax.getInitData, payload);
            yield put({type: 'saveInitData', data})
        },
        *getUserAccountList({
            payload
        }, {call, put}) {
            const data = yield call(Ajax.getUserAccountList, payload);
            yield put({type: 'saveUserAccountList', data})
        }
    },

    /* 集合归并 */
    reducers : {
        setNavBar(state, action) {
            const header = {
                ...state.Header,
                ...action.Header
            }
            return {
                ...state,
                Header: header
            }
        },
        saveInitData(state, action) {
            const initData = action.data
            return {
                ...state,
                initData: initData
            }
        },
        saveUserAccountList(state, action) {
            const userAccountList = action.data
            return {
                ...state,
                userAccountList: userAccountList
            }
        },

    },

    /* 订阅数据源 */
    subscriptions : {
        setup({dispatch, history}) {}
    }
};
