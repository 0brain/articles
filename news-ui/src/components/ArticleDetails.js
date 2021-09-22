import axios from "axios";
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function ArticleDetails() {
  const [article, setArticle] = useState({})
  const [comments, setComments] = useState([])
  let {articleId} = useParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:8086/articles/${articleId}/`
    }).then(response => {
      setArticle(response.data)
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:8086/articles/${articleId}/comments/`
    }).then(response => {
      setComments(response.data)
    })
  }, [])

  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="App-title">
            <h3>{article.title}</h3>
          </div>
        </div>
          <div className="row">
            <div className="text">
              {article.content}
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="pull-right">
              <small>Author: {article.author_name}</small>
            </div>
            <div className="pull-right">
              <small>Published: {new Date(article.created_at).toLocaleString()}</small>
            </div>
          </div>
          <div className="row justify-content-end">
             <div className="pull-right">
                   <small>Number of votes: {article.vote}  </small>
                   <button class="btn btn-success" onClick={() => {  axios({
                   method: 'PATCH',
                   url: `http://localhost:8086/articles/${article.id}/vote/`
                   }).then(response => { setArticle(response.data)
                   })}}>Upvote</button>
              </div>
          </div>


        <div className="row justify-content-start">
          <div className="col">
            <div className="comments-list">
              {comments.map(c => (
                  <div className="media">

                    <div className="media-body">
                      <h4 className="media-heading-user_name">{c.author_name}</h4>
                      {c.content}
                      <p className="pull-right"><small>{new Date(c.created_at).toLocaleString()}</small></p>
                    </div>
                  </div>))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ArticleDetails;
