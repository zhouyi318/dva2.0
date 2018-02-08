import React from 'react';
import { connect } from 'dva';
import propsUp from 'assets/propsUp.png'
import propsDown from 'assets/propsDown.png'
import CssModules from 'assets/CssModules.png'
import styles from './index.less'

class Doc extends React.Component {
  constructor(){
    super()
    this.state={}
  }

  // <p className={styles.p}></p>
  // <div className={styles.highlight}>{``}</div>
  // &nbsp;&nbsp;

  render(){
    return(
      <div className={styles.doc}>
        <div style={{textAlign:'center',fontSize:'2rem'}}>dva.js 知识导图</div>
        <h2>JavaScript 语言</h2>
        <hr/><h3>变量声明</h3>
        <p className={styles.p}>不要用 <code>var</code>，而是用 <code>const</code> 和 <code>let</code>，分别表示常量和变量。不同于 <code>var</code> 的函数作用域，<code>const</code> 和 <code>let</code> 都是块级作用域。</p>
        <div className={styles.highlight}>{`const DELAY = 1000;`}</div>
        <div className={styles.highlight}>{`let count = 0;`}</div>
        <div className={styles.highlight}>{`count = count + 1;`}</div>

        <h3>模板字符串</h3>
        <p className={styles.p}>模板字符串提供了另一种做字符串组合的方法。</p>
        <div className={styles.highlight}>{`const user = 'world';`}</div>
        <div className={styles.highlight}>console.log(`hello $花括号user花括号;`);  // hello world</div>

        <h3>默认参数</h3>
        <div className={styles.highlight}>{`function logActivity(activity = 'skiing') {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`console.log(activity);`}</div>
        <div className={styles.highlight}>{`}`}</div>
        <div className={styles.highlight}>{`logActivity();  // skiing`}</div>

        <h3>箭头函数</h3>
        <p>函数的快捷写法，不需要通过 <code>function</code> 关键字创建函数，并且还可以省略 <code>return</code> 关键字。</p>
        <p>同时，箭头函数还会继承当前上下文的 <code>this</code> 关键字。</p>
        <div className={styles.highlight}>{`[1, 2, 3].map(x => x + 1);  // [2, 3, 4]`}</div>

        <h3>模块的 Import 和 Export</h3>
        <p><code>import</code> 用于引入模块，<code>export</code> 用于导出模块。</p>
        <div className={styles.highlight}>{`// 引入全部`}</div>
        <div className={styles.highlight}>{`import dva from 'dva';`}</div><br/>
        <div className={styles.highlight}>{`// 引入部分`}</div>
        <div className={styles.highlight}>{`import { connect } from 'dva';`}</div>
        <div className={styles.highlight}>{`import { Link, Route } from 'dva/router';`}</div><br/>
        <div className={styles.highlight}>{`// 引入全部并作为 github 对象`}</div>
        <div className={styles.highlight}>{`import * as github from './services/github';`}</div><br/>
        <div className={styles.highlight}>{`// 导出默认`}</div>
        <div className={styles.highlight}>{`export default App;`}</div><br/>
        <div className={styles.highlight}>{`// 部分导出，需 import { App } from './file'; 引入`}</div>
        <div className={styles.highlight}>{`export class App extend Component {};`}</div>


        <hr/><h2>ES6 对象和数组</h2>
        <h3>析构赋值</h3>
        <p>析构赋值让我们从 Object 或 Array 里取部分数据存为变量。</p>
        <div className={styles.highlight}>{`// 对象`}</div>
        <div className={styles.highlight}>{`const user = { name: 'guanguan', age: 2 };`}</div>
        <div className={styles.highlight}>{`const { name, age } = user;`}</div><br/>
        <div className={styles.highlight}>{`// 数组`}</div>
        <div className={styles.highlight}>{`const arr = [1, 2];`}</div>
        <div className={styles.highlight}>{`const [foo, bar] = arr`}</div>
        <div className={styles.highlight}>{`console.log(foo);  // 1`}</div>
        <p>我们也可以析构传入的函数参数。</p>

        <div className={styles.highlight}>{`const add = (state, { payload }) => {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`return state.concat(payload);`}</div>
        <div className={styles.highlight}>{`};`}</div>

        <p>析构时还可以配 alias，让代码更具有语义。</p>
        <div className={styles.highlight}>{`const add = (state, { payload: todo }) => {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`return state.concat(todo);`}</div>
        <div className={styles.highlight}>{`};`}</div>

        <h3>对象字面量改进</h3>
        <p className={styles.p}>这是析构的反向操作，用于重新组织一个 Object 。</p>
        <div className={styles.highlight}>{`const name = 'duoduo';`}</div>
        <div className={styles.highlight}>{`const age = 8;`}</div>
        <div className={styles.highlight}>{`const user = { name, age };  // { name: 'duoduo', age: 8 }`}</div>
        <p>定义对象方法时，还可以省去 function 关键字。</p>
        <div className={styles.highlight}>{`app.model({`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`reducers: {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`add() {}  // 等同于 add: function() {}`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`effects: {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`*addRemote() {}  // 等同于 addRemote: function*() {}`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
        <div className={styles.highlight}>{`});`}</div>

        <h3>Spread Operator</h3>
        <p>Spread Operator 即 3 个点 <code>...</code>，有几种不同的使用方法。</p><br/>
        
        <p>可用于组装数组。</p>
        <div className={styles.highlight}>{`const todos = ['Learn dva'];`}</div>
        <div className={styles.highlight}>{`[...todos, 'Learn antd'];  // ['Learn dva', 'Learn antd']`}</div><br/>
        
        <p>也可用于获取数组的部分项。</p>
        <div className={styles.highlight}>{`const arr = ['a', 'b', 'c'];`}</div>
        <div className={styles.highlight}>{`const [first, ...rest] = arr;`}</div>
        <div className={styles.highlight}>{`rest;  // ['b', 'c']`}</div><br/>
        <div className={styles.highlight}>{`// With ignore`}</div>
        <div className={styles.highlight}>{`const [first, , ...rest] = arr;`}</div>
        <div className={styles.highlight}>{`rest;  // ['c']`}</div><br/>
        
        <p>还可收集函数参数为数组。</p>
        <div className={styles.highlight}>{`function directions(first, ...rest) {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`console.log(rest);`}</div>
        <div className={styles.highlight}>{`}`}</div>
        <div className={styles.highlight}>{`directions('a', 'b', 'c');  // ['b', 'c'];`}</div><br/>
        
        <p>代替 apply。</p>
        <div className={styles.highlight}>{`function foo(x, y, z) {}`}</div>
        <div className={styles.highlight}>{`const args = [1,2,3];`}</div>
        <div className={styles.highlight}>{`// 下面两句效果相同`}</div>
        <div className={styles.highlight}>{`foo.apply(null, args);`}</div>
        <div className={styles.highlight}>{`foo(...args);`}</div><br/>
        
        <p>对于 Object 而言，用于组合成新的 Object 。(ES2017 stage-2 proposal)</p>
        <div className={styles.highlight}>{`const foo = {a: 1, b: 2,};`}</div>
        <div className={styles.highlight}>{`const bar = {b: 3,c: 2,};`}</div>
        <div className={styles.highlight}>{`const d = 4;`}</div>
        <div className={styles.highlight}>{`const ret = { ...foo, ...bar, d };  // { a:1, b:3, c:2, d:4 }`}</div><br/>
        <p>此外，在 JSX 中 Spread Operator 还可用于扩展 props，详见 <code>Spread Attributes</code>。</p>

        <h3>Promises</h3>
        <p>Promise 用于更优雅地处理异步请求。比如发起异步请求：</p>
        <div className={styles.highlight}>{`fetch('/api/todos')`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`.then(res => res.json())`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`.then(data => ({ data }))`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`.catch(err => ({ err }));`}</div>
        <p>定义 Promise 。</p>
        <div className={styles.highlight}>{`const delay = (timeout) => {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`return new Promise(resolve => {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`setTimeout(resolve, timeout);`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`});`}</div>
        <div className={styles.highlight}>{`};`}</div><br/>
        <div className={styles.highlight}>{`delay(1000).then(_ => {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`console.log('executed');`}</div>
        <div className={styles.highlight}>{`});`}</div>

        <h3>Generators</h3>
        <p>dva 的 effects 是通过 generator 组织的。Generator 返回的是迭代器，通过 <code>yield</code> 关键字实现暂停功能。</p>
        <p>这是一个典型的 dva effect，通过 <code>yield</code> 把异步逻辑通过同步的方式组织起来。</p>
        <div className={styles.highlight}>{`app.model({`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`namespace: 'todos',`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`effects: {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`*addRemote({ payload: todo }, { put, call }) {`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`yield call(addTodo, todo);`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`yield put({ type: 'add', payload: todo });},`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
        <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
        <div className={styles.highlight}>{`});`}</div>

      <hr/><h2>React Component</h2>
      <h3>Stateless Functional Components</h3>
      <p>React Component 有 3 种定义方式，分别是 <code>React.createClass</code>, <code>class</code> 和 <code>Stateless Functional Component</code>。推荐尽量使用最后一种，保持简洁和无状态。这是函数，不是 Object，没有 <code>this</code> 作用域，是 pure function。</p>
      <p>比如定义 App Component 。</p>
      <div className={styles.highlight}>{`function App(props) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`function handleClick() {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`props.dispatch({ type: 'app/create' });`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`}`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`return <div onClick={handleClick}>$ 「 props.name 」</div>`}</div>
      <div className={styles.highlight}>{`}`}</div>
      <p>等同于：</p>
      <div className={styles.highlight}>{`class App extends React.Component {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`handleClick() {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`this.props.dispatch({ type: 'app/create' });`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`}`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`render() {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`return <div onClick={this.handleClick.bind(this)}>${this.props.name}</div>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`}`}</div>
      <div className={styles.highlight}>{`}`}</div>

      <hr/><h2>JSX</h2>
      <h3>Component 嵌套</h3>
      <p>类似 HTML，JSX 里可以给组件添加子组件。</p>
      <div className={styles.highlight}>{`<App>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`<Header />`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`<MainContent />`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`<Footer />`}</div>
      <div className={styles.highlight}>{`</App>`}</div>

      <h3>className</h3>
      <p><code>class</code> 是保留词，所以添加样式时，需用 <code>className</code> 代替 <code>class</code> 。</p>
      <div className={styles.highlight}>{`<h1 className="fancy">Hello dva</h1>`}</div>

      <h3>JavaScript 表达式</h3>
      <p>JavaScript 表达式需要用 <code>{}</code> 括起来，会执行并返回结果。</p>
      <div className={styles.highlight}>{`<h1>{ this.props.title }</h1>`}</div>

      <h3>Mapping Arrays to JSX</h3>
      <p>可以把数组映射为 JSX 元素列表。</p>
      <div className={styles.highlight}>{`<ul>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`{ this.props.todos.map((todo, i) => <li key={i}>{todo}</li>) }`}</div>
      <div className={styles.highlight}>{`</ul>`}</div>

      <h3>注释</h3>
      <p>尽量别用 <code>//</code> 做单行注释。</p>

      <h3>Spread Attributes</h3>
      <p>这是 JSX 从 ECMAScript6 借鉴过来的很有用的特性，用于扩充组件 props 。</p>
      <div className={styles.highlight}>{`const attrs = {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`href: 'http://example.org',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`target: '_blank',`}</div>
      <div className={styles.highlight}>{`};`}</div>
      <div className={styles.highlight}>{`<a {...attrs}>Hello</a>`}</div>
      <p>等同于</p>
      <div className={styles.highlight}>{`const attrs = {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`href: 'http://example.org',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`target: '_blank',`}</div>
      <div className={styles.highlight}>{`};`}</div>
      <div className={styles.highlight}>{`<a href={attrs.href} target={attrs.target}>Hello</a>`}</div>

      <hr/><h2>Props</h2>
      <p>数据处理在 React 中是非常重要的概念之一，分别可以通过 props, state 和 context 来处理数据。而在 dva 应用里，你只需关心 props 。</p>
      <h3>propTypes</h3>
      <p>JavaScript 是弱类型语言，所以请尽量声明 propTypes 对 props 进行校验，以减少不必要的问题。</p>
      <div className={styles.highlight}>{`function App(props) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`return <div>{props.name}</div>;`}</div>
      <div className={styles.highlight}>{`}`}</div>
      <div className={styles.highlight}>{`App.propTypes = {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`name: React.PropTypes.string.isRequired,`}</div>
      <div className={styles.highlight}>{`};`}</div>
      <p>内置的 prop type 有：</p>
      <ul>
        <li>PropTypes.array</li>
        <li>PropTypes.bool</li>
        <li>PropTypes.func</li>
        <li>PropTypes.number</li>
        <li>PropTypes.object</li>
        <li>PropTypes.string</li>
      </ul>
      <p>往下传数据</p>
      <img src={propsDown} alt="propsDown"/>
      <p>往上传数据</p>
      <img src={propsUp} alt="propsUp"/>

      <h3>理解 CSS Modules</h3>
      <p>一张图理解 CSS Modules 的工作原理：</p>
      <img src={CssModules} alt="CssModules"/>
      <p><code>button</code> class 在构建之后会被重命名为 <code>ProductList_button_1FU0u</code> 。<code>button</code> 是 local name，而 <code>ProductList_button_1FU0u</code> 是 global name 。<strong>你可以用简短的描述性名字，而不需要关心命名冲突问题。</strong></p>
      <p>然后你要做的全部事情就是在 css/less 文件里写 <code>.button ...</code>，并在组件里通过 <code>styles.button</code> 来引用他。</p>

      <h3>定义全局 CSS</h3>
      <p>CSS Modules 默认是局部作用域的，想要声明一个全局规则，可用 <code>:global</code> 语法。</p>
      <div className={styles.highlight}>{`.title {color: red;}`}</div>
      <div className={styles.highlight}>{`:global(.title) {color: green;}`}</div>
      <p>然后在引用的时候：</p>
      <div className={styles.highlight}>{`<App className={styles.title} /> // red`}</div>
      <div className={styles.highlight}>{`<App className="title" />        // green`}</div>

      <h3>classnames Package</h3>
      <p>在一些复杂的场景中，一个元素可能对应多个 className，而每个 className 又基于一些条件来决定是否出现。这时，classnames 这个库就非常有用。</p>
      <div className={styles.highlight}>{`import classnames from 'classnames';`}</div>
      <div className={styles.highlight}>{`const App = (props) => {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`const cls = classnames({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`btn: true,`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`btnLarge: props.type === 'submit',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`btnSmall: props.type === 'edit',`}</div>\
      <div className={styles.highlight}>&nbsp;&nbsp;{`});`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`return <div className={ cls } />;`}</div>
      <div className={styles.highlight}>{`}`}</div>
      <p>这样，传入不同的 type 给 App 组件，就会返回不同的 className 组合：</p>
      <div className={styles.highlight}>{`<App type="submit" /> // btn btnLarge`}</div>
      <div className={styles.highlight}>{`<App type="edit" />   // btn btnSmall`}</div>

      <hr/><h2>Reducer</h2>
      <p>reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：<code>(state, action) =&gt; state</code></p>
      <h3>增删改(以 todos 为例)</h3>
      <div className={styles.highlight}>{`app.model({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{` state: [],`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`reducers: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`add(state, { payload: todo }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return state.concat(todo);`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`remove(state, { payload: id }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return state.filter(todo => todo.id !== id);`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{` },`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`update(state, { payload: updatedTodo }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return state.map(todo => {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (todo.id === updatedTodo.id) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return { ...todo, ...updatedTodo };`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` } else {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return todo;`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`});`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{` },`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`};`}</div><br/>
      <h3>嵌套数据的增删改</h3>
      <p>建议最多一层嵌套，以保持 state 的扁平化，深层嵌套会让 reducer 很难写和难以维护。</p>
      <div className={styles.highlight}>{`app.model({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`namespace: 'app',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`state: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`todos: [],`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`loading: false,`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`reducers: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`add(state, { payload: todo }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const todos = state.todos.concat(todo);`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return { ...state, todos };`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`});`}</div>
      <p>下面是深层嵌套的例子，应尽量避免。</p>
      <div className={styles.highlight}>{`app.model({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`namespace: 'app',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`state: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`a: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`b: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`todos: [],`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`loading: false,`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`reducers: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`add(state, { payload: todo }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const todos = state.a.b.todos.concat(todo);`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const b = { ...state.a.b, todos };`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`const a = { ...state.a, b };`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`return { ...state, a };`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`});`}</div>
      
      <hr/><h2>Effect</h2>
      <p>示例：</p>
      <div className={styles.highlight}>{`app.model({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`namespace: 'todos',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`effects: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`*addRemote({ payload: todo }, { put, call }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`yield call(addTodo, todo);`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`yield put({ type: 'add', payload: todo });`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`});`}</div>
      <p>put:用于触发 action 。</p>
      <div className={styles.highlight}>{`yield put({ type: 'todos/add', payload: 'Learn Dva' });`}</div>
      <p>call:用于调用异步逻辑，支持 promise 。</p>
      <div className={styles.highlight}>{`const result = yield call(fetch, '/todos');`}</div>
      <p>select:用于从 state 里获取数据。</p>
      <div className={styles.highlight}>{`const todos = yield select(state => state.todos);`}</div>

      <hr/><h2>Subscription</h2>
      <p><code>subscriptions</code> 是订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。格式为 <code>( dispatch, history ) =&gt; unsubscribe</code> 。</p>
      <p>异步数据初始化:比如：当用户进入 /users 页面时，触发 action users/fetch 加载用户数据。</p>
      <div className={styles.highlight}>{`app.model({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`subscriptions: {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`setup({ dispatch, history }) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`history.listen(({ pathname }) => {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`if (pathname === '/users') {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`dispatch({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`type: 'users/fetch',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`});`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`});`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`});`}</div>
      <p>如果 url 规则比较复杂，比如 /users/:userId/search，那么匹配和 userId 的获取都会比较麻烦。这是推荐用 path-to-regexp 简化这部分逻辑。</p>
      <div className={styles.highlight}>{`import pathToRegexp from 'path-to-regexp';`}</div>
      <div className={styles.highlight}>{`const match = pathToRegexp('/users/:userId/search').exec(pathname);`}</div>
      <div className={styles.highlight}>{`if (match) {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`const userId = match[1];`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`// dispatch action with userId`}</div>
      <div className={styles.highlight}>{`}`}</div>

      <hr/><h2>Router</h2>
      <h3>Config with JSX Element (router.js)</h3>
      <div className={styles.highlight}>{`import React from 'react';`}</div>
      <div className={styles.highlight}>{`import {Router, Route, Switch, IndexRoute} from 'dva/router';`}</div>
      <div className={styles.highlight}>{`import App from './routes/App';`}</div>
      <div className={styles.highlight}>{`import Home from './routes/Home';`}</div>
      <div className={styles.highlight}>{`import Doc from './routes/Doc';`}</div><br/>
      <div className={styles.highlight}>{`const RouterConfig = ({history}) => {`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`return (`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`<App>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`<Router history={history}>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Switch>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Route path="/" exact component={Home} />`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`<Route path="/doc" component={Doc} />`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`</Switch>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`</Router>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`</App>`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`);`}</div>
      <div className={styles.highlight}>{`}`}</div>
      <div className={styles.highlight}>{`export default RouterConfig;`}</div>

      <h3>基于 action 进行页面跳转</h3>
      <div className={styles.highlight}>{`import { routerRedux } from 'dva/router';`}</div><br/>
      <div className={styles.highlight}>{`// Inside Effects`}</div>
      <div className={styles.highlight}>{`yield put(routerRedux.push('/logout'));`}</div><br/>
      <div className={styles.highlight}>{`// Outside Effects`}</div>
      <div className={styles.highlight}>{`dispatch(routerRedux.push('/logout'));`}</div><br/>
      <div className={styles.highlight}>{`// With query`}</div>
      <div className={styles.highlight}>{`routerRedux.push({`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`pathname: '/logout',`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;&nbsp;&nbsp;{`page: 2,`}</div>
      <div className={styles.highlight}>&nbsp;&nbsp;{`},`}</div>
      <div className={styles.highlight}>{`});`}</div>
      


      </div>
    )
  }

}

Doc.propTypes = {
};

export default connect(state=>state)(Doc);
