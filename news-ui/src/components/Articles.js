import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';

function Article() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8086/articles/'
    }).then(response => {
      setArticles(response.data)
    })
  }, [])

  return (
      <div className="container">
      <div className="row justify-content-center">
          <div className="App-title">
            <h3>Articles list</h3>
          </div>
        </div>

        <ul>
          {
            articles.map(a => (
                <Link to={{pathname: `/articles/${a.id}`, fromDashboard: false}}
                      className="list-group-item" key={a.id}>{a.title}</Link>))
          }
        </ul>
      </div>
  );
}

export default Article;
