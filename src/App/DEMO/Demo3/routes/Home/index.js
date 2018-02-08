import React from 'react';
import { connect } from 'dva';

import stateViso from 'assets/state-visol.png'
import styles from './index.less'

class Home extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    return(
      <div className={styles.home}>
        <div style={{textAlign:'center',fontSize:'2rem'}}>Concepts</div>
        <h2>数据流向</h2>
        <p className={styles.p}>数据的改变发生通常是通过用户交互行为或者浏览器行为（如路由跳转等）触发的，当此类行为会改变数据的时候可以通过 
          <code>dispatch</code> 发起一个 action，如果是同步行为会直接通过 
          <code>Reducers</code> 改变 <code>State</code> ，如果是异步行为（副作用）会先触发 
          <code>Effects</code> 然后流向 
          <code>Reducers</code> 最终改变 
          <code>State</code>，所以在 dva 中，数据流向非常清晰简明，并且思路基本跟开源社区保持一致（也是来自于开源社区）。
        </p>
        <img src={stateViso} alt="stateViso"/>

        <hr/>

        <h2>Models</h2>
        
        <h3>State</h3>
        <p><code>type State = any</code></p>
        <p className={styles.p}>State 表示 Model 的状态数据，通常表现为一个 javascript 对象（当然它可以是任何值）；操作的时候每次都要当作不可变数据（immutable data）来对待，保证每次都是全新对象，没有引用关系，这样才能保证 State 的独立性，便于测试和追踪变化。</p>
        <p>在 dva 中你可以通过 dva 的实例属性 
          <code>_store</code> 看到顶部的 state 数据，但是通常你很少会用到:
        </p>
        <div className={styles.highlight}>const app = dva();</div>
        <div className={styles.highlight}> console.log(app._store); // 顶部的 state 数据</div>
        
        <hr/><h3>Action</h3>
        <p><code>type AsyncAction = any</code></p>
        <p className={styles.p}>Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。无论是从 UI 事件、网络回调，还是 WebSocket 等数据源所获得的数据，最终都会通过 dispatch 函数调用一个 action，从而改变对应的数据。action 必须带有 <code>type</code> 属性指明具体的行为，其它字段可以自定义，如果要发起一个 action 需要使用 <code>dispatch</code> 函数；需要注意的是 <code>dispatch</code> 是在组件 connect Models以后，通过 props 传入的。</p>
        <div className={styles.highlight}>{`dispatch({ type: 'add' })`}</div>
       
        <hr/><h3>dispatch 函数</h3>
        <p><code>type dispatch = (a: Action) => Action</code></p>
        <p className={styles.p}>dispatching function 是一个用于触发 action 的函数，action 是改变 State 的唯一途径，但是它只描述了一个行为，而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的。</p>
        <p className={styles.p}>在 dva 中，connect Model 的组件通过 props 可以访问到 dispatch，可以调用 Model 中的 Reducer 或者 Effects，常见的形式如：</p>
        <div className={styles.highlight}>
        <div className={styles.highlight}>{`dispatch({`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`type: 'user/add', // 如果在 model 外调用，需要添加 `}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`namespacepayload: {}, // 需要传递的信息 `}</div>
        <div className={styles.highlight}>{`})`}</div>
        </div>

        <hr/><h3>Reducer</h3>
        <p><code>{`type Reducer<S, A> = (state: S, action: A) => S`}</code></p>
        <p className={styles.p}>Reducer（也称为 reducing function）函数接受两个参数：之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果。该函数把一个集合归并成一个单值。</p>
        <p className={styles.p}>Reducer 的概念来自于是函数式编程，很多语言中都有 reduce API。如在 javascript 中：</p>
        <div className={styles.highlight}>{`[{x:1},{y:2},{z:3}].reduce(function(prev, next){`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`return Object.assign(prev, next);`}</div>
        <div className={styles.highlight}>{`}) //return {x:1, y:2, z:3}`}</div>
        <p className={styles.p}>在 dva 中，reducers 聚合积累的结果是当前 model 的 state 对象。通过 actions 中传入的值，与当前 reducers 中的值进行运算获得新的值（也就是新的 state）。需要注意的是 Reducer 必须是纯函数，所以同样的输入必然得到同样的输出，它们不应该产生任何副作用。并且，每一次的计算都应该使用,immutable data，这种特性简单理解就是每次操作都是返回一个全新的数据（独立，纯净），所以热重载和时间旅行这些功能才能够使用。</p>

        <hr/><h3>Effect</h3>
        <p>Effect 被称为副作用，在我们的应用中，最常见的就是异步操作。它来自于函数编程的概念，之所以叫副作用是因为它使得我们的函数变得不纯，同样的输入不一定获得同样的输出。</p>
        <p>dva 为了控制副作用的操作，底层引入了<code>redux-sagas</code> ,做异步流程控制，由于采用了<code>generator</code>的相关概念，所以将异步转成同步写法，从而将<code>effects</code>转为纯函数。至于为什么我们这么纠结于 <strong>纯函数</strong>，如果你想了解更多可以阅读 <code> Mostly adequate guide to FP </code>，或者它的中文译本,JS函数式编程指南。</p>

        <hr/><h3>Subscription</h3>
        <p>Subscriptions 是一种从 <strong>源</strong> 获取数据的方法，它来自于 elm。</p>
        <p>Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。</p>
        <div className={styles.highlight}>import key from 'keymaster';</div>
        <div className={styles.highlight}>...</div>
        <div className={styles.highlight}>{`app.model({`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`namespace: 'count',`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`subscriptions: {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`keyEvent(dispatch) {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`key('⌘+up, ctrl+up', () => { dispatch({type:'add'}) });`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`}`}</div>
        <div className={styles.highlight}>{`});`}</div>

        <hr/><h3>Router</h3>
        <p>这里的路由通常指的是前端路由，由于我们的应用现在通常是单页应用，所以需要前端代码来控制路由逻辑，通过浏览器提供的 < code>History API</code> 可以监听浏览器url的变化，从而控制路由相关操作。</p>
        <p>dva 实例提供了 router 方法来控制路由，使用的是<code>react-router</code>.</p>
        <div className={styles.highlight}>{`import { Router, Route } from 'dva/router';`}</div>
        <div className={styles.highlight}>{`app.router(({history}) =>`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`<Router history={history}>`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`<Route path="/" component={HomePage} />`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`</Router>`}</div>
        <div className={styles.highlight}>{`);`}</div>

        <hr/><h3>Route Components</h3>
        <p>在 <code>组件设计方法</code>中，我们提到过 Container Components，在 dva 中我们通常将其约束为 Route Components，因为在 dva 中我们通常以页面维度来设计 Container Components。</p>
        <p>所以在 dva 中，通常需要 connect Model的组件都是 Route Components，组织在<code>/routes/</code>目录下，而<code>/components/</code>目录下则是纯组件（Presentational Components）。</p>

        <hr/>
        <h2>相关资料</h2>
        <p><code>redux docs：</code>http://redux.js.org/docs/Glossary.html</p>
        <p><code>redux docs 中文：</code>http://cn.redux.js.org/index.html</p>
        <p><code>Mostly adequate guide to FP：</code>https://github.com/MostlyAdequate/mostly-adequate-guide</p>
        <p><code>JS函数式编程指南：</code>https://www.gitbook.com/book/llh911001/mostly-adequate-guide-chinese/details</p>
        <p><code>choo docs：</code>https://github.com/yoshuawuyts/choo</p>
        <p><code>elm：</code>http://elm-lang.org/blog/farewell-to-frp</p>
      </div>
    )
  }

}

Home.propTypes = {
};

export default connect(state=>state)(Home);
