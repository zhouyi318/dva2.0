/*
 * @Author: 周毅 
 * @Date: 2018-02-07 14:40:32 
 * @Last Modified by: 周毅
 * @Last Modified time: 2018-02-08 11:20:17
 */

// 引入 dva、connect、router、Switch、keymaster
import dva, {connect} from 'dva';
import {Router, Route, Switch} from 'dva/router';
import key from 'keymaster';
import styles from './index.less';

// 初始化一个app
const app = dva();

// 使用插件，目前用不到，忽略 use
// app.use({})

// 添加 reducers
app.model({
    namespace: 'count',
    // 将计数器开始值默认为 0
    state: 0,
    reducers: {
        // 增加
        add(count) {
            return count + 1
        },
        // 减少
        minus(count) {
           return count - 1
        }
    },
    // 添加副作用
    effects: {
        *todo(action, {call, put}) {
            // 先运行 reducers 中的 add 方法
            yield put({type: 'add'});
            // 当 add 每点击一次成功后，执行 delay 函数，并且携带参数 1000
            yield call(delay, 1000);
            // 1秒后，执行 reducers 中的 minus 方法
            yield put({type: 'minus'});
        }
    },
    // 绑定键盘事件
    subscriptions: {
        /* 订阅键盘事件 */
        keyboardWatcher({dispatch}) {
            key('⌘+up , ctrl+up', () => {
                dispatch({type: 'todo'})
            });
            key('⌘+down, ctrl+down', () => {
                dispatch({type: 'minus'})
            });
        }
    }
})

// 增加 delay 函数 time 为 *todo 携带来的参数
function delay(time) {
    return new Promise((resolve) => {
        // 延迟 1 秒后， return resolve （成功） resolve：成功回调
        setTimeout(resolve, time)
    });
}

// 定义组件
const Count = (props) => {
    // 获取负组件传来的 models
    props = props.props;
    return (
        <div className={styles.normal}>
            <h2>实现购物车“添加/减少”商品</h2>
            <div className={styles.count}>商品数量： {props.count}
            </div>
            <div className={styles.toggle}>
                <button
                    className={styles.add}
                    onClick={() => {
                    props.dispatch({type: 'count/todo'})
                }}>+</button>
                <button
                    className={styles.minus}
                    onClick={() => {
                    props.dispatch({type: 'count/minus'})
                }}>-</button>
            </div>
        </div>
    )
}

// 引入组件
function App(props) {
    return (
        <div>
            {/* models 传给组件  */}
            <Count props={props}/>
        </div>
    )
}


// 将数据吐出给App页面
function mapStateToProps(state) {
    return {
        ...state
    }
}

// 将模型数据和当前页面关联
const Page = connect(mapStateToProps)(App)

//定义路由
const RouterConfig = ({history}) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Page}/>
            </Switch>
        </Router>
    )
}

app.router(RouterConfig);


app.start('#root');






