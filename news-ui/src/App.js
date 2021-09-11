import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from "./components/Articles";
import ArticleDetails from "./components/ArticleDetails";

function App() {
  return (
      <div className="App">
        <Router>
          <Article/>
          <Switch>
            <Route path="/articles/:articleId">
                <ArticleDetails />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}
export default App;
