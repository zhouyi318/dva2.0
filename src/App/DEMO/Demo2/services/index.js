/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:39:21 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-07 15:18:34
 */

import request from 'utils/request';

export function getInitData(params) {
    return request({
        transId: params.transId, 
        body: params.body
    });
}

export function getUserAccountList(params) {
    return request({
        transId: params.transId, 
        body: params.body
    });
}