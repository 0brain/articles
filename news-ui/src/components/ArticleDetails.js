import axios from "axios";
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function ArticleDetails() {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [newContent, setContent] = useState('')
  const [newAuthor_name, setAuthor_name] = useState('')
  let {articleId} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8086/articles/${articleId}/`).then((response) => {
      setArticle(response.data);
    });

    axios.get(`http://localhost:8086/articles/${articleId}/comments/`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(`http://localhost:8086/articles/${articleId}/comments/`, {
        author_name: newAuthor_name,
        content: newContent,
        article: articleId,
      })
      .then((response) => {
        setAuthor_name('');
        setContent('');
        setComments([...comments, response.data]);
      });
  };



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

              <div className="coll-left">
                  <Link to={`/articles/edit_article/${article.id}`}>
                  <button className="btn btn-primary btn-block" type="button">
                  Edit an Article
                  </button>
                  </Link>

                  <button
                   className="ml-2 btn btn-danger pull-xs-right" onClick={() => {  axios({
                   method: 'DELETE',
                   url: `http://localhost:8086/articles/${article.id}/`
                   }).then(response => {window.location.href = '/';
                   })}}>Delete an Article
                  </button>



              </div>



              <div className="App-title">
               <h5>Add comment to article: "{article.title}"</h5>
              </div>

              <div className="form-group">
              <textarea
              className="mt-3 form-control form-control-lg"
              rows="2"
              placeholder="Enter content"
              name="content"
              value={newContent}
              onChange={(event) => {
                setContent(event.target.value);
              }}
              />
              <input
              type="text"
              className="mt-3 form-control form-control-lg"
              placeholder="Enter your name"
              name="author_name"
              value={newAuthor_name}
              onChange={(event) => {
               setAuthor_name(event.target.value);
              }}
              />
              <button className="mt-3 btn btn-primary btn-block" onClick={addComment}>Add Comment</button>



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