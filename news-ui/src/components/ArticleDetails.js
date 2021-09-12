import axios from "axios";
import {useEffect, useState} from 'react';
import{ useParams } from "react-router-dom";

function ArticleDetails() {
  const [article, setArticle] = useState({})
  let { articleId } = useParams();
  console.log(articleId);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:8086/articles/${articleId}/`
    }).then(response => {
      setArticle(response.data)
    })
  }, [articleId])

  return (
      <div>
        <h3>{article.title}</h3>
        <div>{article.content}</div>
      </div>
  );
}

export default ArticleDetails;
