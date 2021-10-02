import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from "./components/Articles";
import AddForm from './components/AddArticle';
import EditForm from './components/EditArticle';
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Article}/>
            <Route exact path="/articles/add_article" component={AddForm}/>
            <Route exact path="/articles/edit_article/:id" component={EditForm}/>
            <Route exact path="/articles/:articleId" component={ArticleDetails}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
