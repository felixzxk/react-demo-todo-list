import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Main, { JSX, Life, DataFlow, Events, Demo, Comp } from './ReactInfo';
import RR from './Router';
import Flux, {ReduxInfo, Dvajs} from './Flux';
import WP from './Webpack';
import NoMatch from './NoMatch';
import styles from './styles.less';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.wrap}>
          <h1 className={styles.header}>hello</h1>
          <div className={styles.content}>
            <ul className={styles.menu}>
              <li>
                <Link to="/">React</Link>
                <ul>
                  <li>
                    <Link to="/react-demo">demo</Link>
                  </li>
                  <li>
                    <Link to="/react-jsx">jsx</Link>
                  </li>
                  <li>
                    <Link to="/react-life">生命周期</Link>
                  </li>
                  <li>
                    <Link to="/react-events">事件处理</Link>
                  </li>
                  <li>
                    <Link to="/react-dataflow">数据流</Link>
                  </li>
                  <li>
                    <Link to="/react-comp">组件</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/flux">Flux</Link>
                <ul>
                  <li>
                    <Link to="/flux-redux">redux</Link>
                  </li>
                  <li>
                    <Link to="/flux-dvajs">dvajs</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/react-router">React-Router</Link>
              </li>
              <li>
                <Link to="/webpack">Webpack</Link>
              </li>
              <li>
                <Link to="/style">Style</Link>
                <ul>
                  <li>
                    <Link to="/style-css">css</Link>
                  </li>
                  <li>
                    <Link to="/style-less">less</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={styles.mainBox}>
              <div className={styles.mainBoxWrap}>
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/react-jsx" component={JSX} />
                  <Route exact path="/react-life" component={Life} />
                  <Route exact path="/react-dataflow" component={DataFlow} />
                  <Route exact path="/react-events" component={Events} />
                  <Route exact path="/react-demo" component={Demo} />
                  <Route exact path="/react-router" component={RR} />
                  <Route exact path="/react-comp" component={Comp} />
                  <Route exact path="/flux" component={Flux} />
                  <Route exact path="/flux-redux" component={ReduxInfo} />
                  <Route exact path="/flux-dvajs" component={Dvajs} />
                  <Route exact path="/webpack" component={WP} />
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
