import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Main';
import RR from './Router';
import WP from './Webpack';
import NoMatch from './NoMatch';
import ReactDemo from './react-demo';
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
                    <Link to="/demo">demo</Link>
                  </li>
                  <li>
                    <Link to="/react-jsx">jsx</Link>
                  </li>
                  <li>
                    <Link to="/react-life-circle">生命周期</Link>
                  </li>
                  <li>
                    <Link to="/react-event">事件处理</Link>
                  </li>
                  <li>
                    <Link to="/react-data-flow">数据流</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/react-router">React-Router</Link>
              </li>
              <li>
                <Link to="/webpack">Webpack</Link>
              </li>
            </ul>
            <div className={styles.mainBox}>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/demo" component={ReactDemo} />
                <Route exact path="/react-router" component={RR} />
                <Route exact path="/webpack" component={WP} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
