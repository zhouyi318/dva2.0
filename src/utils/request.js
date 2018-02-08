/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:15 
 * @Last Modified by:   周毅 
 * @Last Modified time: 2018-02-07 14:40:15 
 */
import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);

  error.response = response;
  throw error;
}

export default function request(param) {
  if (process.env.NODE_ENV === "development") {
    console.log(`请求体:${JSON.stringify(param)}`)
    return fetch(`/${param.transId}`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: param.body ? JSON.stringify(param.body) : {}
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(data => (data))
      .catch(err => ({
        err
      }));
  } else {

    let nativeParam = Object.assign({}, param, {
      success: 'nativeSuccess',
      fail: 'nativeFail'
    });

    let myPromise = new Promise((resolve, reject) => {
      window.nativeSuccess = (res) => {
          window.jsBridge.log("JS返回数据信息:" + res)
          resolve(res);
      };
      window.nativeFail = function(err) {

        if(typeof err === "string"){
          err = JSON.parse(err)
        }

        window.jsBridge.log("JS返回错误信息:" + err.msg)
       
        window.alert(err.msg);
      }
      window.jsBridge.postFormRequest(nativeParam);
    });

    return myPromise.then(res => {
        if(typeof res === "string"){
          res = JSON.parse(res)
        }
        return  res;
    });

  }
}
