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
  }, [articleId])

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
        <div className="row">
          <div className="col">
            <h3>{article.title}</h3>
          </div>
          <div className="row">
            <div className="col">
              {article.content}
            </div>
          </div>
          <div className="row">
            <div className="col">
              Iм’я автора: {article.author_name}
            </div>
            <div className="col">
              Дата публікації: {article.created_at}
            </div>
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col">
            <div className="page-header">
              <h1>Comments</h1>
            </div>
            <div className="comments-list">
              {comments.map(c => (
                  <div className="media">
                    <p className="pull-right"><small>{c.created_at}</small></p>
                    <div className="media-body">
                      <h4 className="media-heading user_name">{c.author_name}</h4>
                      {c.content}
                    </div>
                  </div>))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ArticleDetails;
