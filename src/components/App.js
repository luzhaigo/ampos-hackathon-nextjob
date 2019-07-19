
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LeftPanel from 'components/LeftPanel';
import { ROUTE_OPTIONS } from 'global-constants';
import Home from 'pages/Home';
import NextJobSuggestion from 'pages/NextJobSuggestion';
import DescriptionPage from 'pages/DescriptionPage'
import ResultPage from 'pages/ResultPage';
import Header from './Header';

import styles from './App.module.scss';

const App = () => {

  return (
    <div className={styles.App}>
      <HashRouter>
        <Header/>
        <div className={styles.appbody}>
          <Route exact path="/" component={Home}/>
          {
            ROUTE_OPTIONS.map((option) => <Route key={option.url} exact path={`${option.url}`} render={() => {
              const Component = option.component;
              return (
                <div className={styles.wrapper}>
                  <LeftPanel/>
                  <div className={styles.right}>
                    <Component/>
                  </div>
                </div>
              );
            }}/>)
          }
          <Route exact path="/description/:id" component={DescriptionPage}/>
          <Route exact path="/result" component={ResultPage}/>
          <Route exact path="/next-job-suggestion" component={NextJobSuggestion}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
