import axios from "axios";
import {useEffect, useState} from 'react';
import{ useParams } from "react-router-dom";

function ArticleDetails() {
  const [article, setArticle] = useState({})
  const [comments, setComments] = useState([])
  let { articleId } = useParams();

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
      <div class="container">
          <div class="row">
               <div class="col">
                    <h3>{article.title}</h3>
                    {article.content}<br></br>
                    <br></br>
                    {article.vote}<br></br>
                    <br></br>
                    Iм’я автора: {article.author_name}<br></br>
                    Дата публікації: {article.created_at}
                    <ul className="list">
                             {
                               comments.map(c => (
                                 <li class="list-group-item">
                                     {c.author_name}
                                     {c.content}
                                     {c.created_at}
                                 </li>
                               ))
                             }
                    </ul>

          </div>
        </div>
      </div>
  );
}

export default ArticleDetails;
