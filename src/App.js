import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Main, { JSX, Life, DataFlow, Events, Demo } from './ReactInfo';
import RR from './Router';
import Flux, {ReduxInfo} from './Flux';
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
                <Link to="/react">React</Link>
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
                </ul>
              </li>
              <li>
                <Link to="/flux">Flux</Link>
                <ul>
                  <li>
                    <Link to="/flux-redux">redux</Link>
                  </li>
                  <li>
                    <Link to="/flux-davjs">dvajs</Link>
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
                  <Route path="/react" component={Main} />
                  <Route path="/react-jsx" component={JSX} />
                  <Route path="/react-life" component={Life} />
                  <Route path="/react-dataflow" component={DataFlow} />
                  <Route path="/react-events" component={Events} />
                  <Route path="/react-demo" component={Demo} />
                  <Route path="/react-router" component={RR} />
                  <Route path="/flux" component={Flux} />
                  <Route path="/flux-redux" component={ReduxInfo} />
                  <Route path="/webpack" component={WP} />
                  <Route component={NoMatch} />
                  <Redirect from="/" to="/react" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
