import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/articles/'
        }).then(response => {
            setArticles(response.data)
        })
    }, [])

  return (
    <div className="App">
      <h3>Список статей</h3>
      <ul class="list-group">
          {
          articles.map(p => (
              <li class="list-group-item" key={p.id}>{p.title}</li>))
          }
      </ul>
    </div>
  );
}

export default App;
