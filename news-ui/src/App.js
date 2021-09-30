import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from "./components/Articles";
import PostForm from './components/AddArticle';
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Article}/>
            <Route exact path="/articles/" component={PostForm}/>
            <Route exact path="/articles/:articleId" component={ArticleDetails}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
