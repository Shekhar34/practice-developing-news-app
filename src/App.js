// App.js
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';

const API_KEY = 'c76f35a40e4c45eaba237801eb3b0217';

function App() {
  return (
   
      <div className="App">
        <Header />
        <Switch>
          <Route path="/business">
            <NewsList category="business" apiKey={API_KEY} />
          </Route>
          <Route path="/entertainment">
            <NewsList category="entertainment" apiKey={API_KEY} />
          </Route>
          <Route path="/general">
            <NewsList category="general" apiKey={API_KEY} />
          </Route>
          <Route path="/health">
            <NewsList category="health" apiKey={API_KEY} />
          </Route>
          <Route path="/science">
            <NewsList category="science" apiKey={API_KEY} />
          </Route>
          <Route path="/sports">
            <NewsList category="sports" apiKey={API_KEY} />
          </Route>
          <Route path="/technology">
            <NewsList category="technology" apiKey={API_KEY} />
          </Route>
          <Route path="/">
            <NewsList category="general" apiKey={API_KEY} />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
