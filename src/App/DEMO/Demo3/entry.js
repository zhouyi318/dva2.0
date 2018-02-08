/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:05 
 * @Last Modified by:   周毅 
 * @Last Modified time: 2018-02-07 14:40:05 
 */
import dva from 'dva';
import Router from './router'

const app = dva();

app.use({});

app.model(require('./models/app'))

app.router(Router);

app.start('#root');
