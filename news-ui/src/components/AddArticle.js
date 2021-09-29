import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const AddArticle = () => {

    let history = useHistory();


    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)
    const [author_name, setAuthor_name] = useState(null)



    const addNewArticle = async () => {
        let formField = new FormData()
        formField.append('title',title)
        formField.append('content',content)
        formField.append('author_name',author_name)


        await axios({
          method: 'post',
          url:'http://localhost:8086/articles/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          history.push('/')
        })
    }

    return (
    <div className="container">

            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an Article</h2>




          <div className="form-group">
            <input
              type="title"
              className="form-control form-control-lg"
              placeholder="Enter article title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              type="textarea"
              className="form-control form-control-lg"
              rows="10"
              placeholder="Enter article content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="author_name"
              className="form-control form-control-lg"
              placeholder="Enter author name"
              name="author_name"
              value={author_name}
              onChange={(e) => setAuthor_name(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-block" onClick={addNewArticle}>Add Article</button>

      </div>
    </div>

    </div>
    );
};

export default AddArticle;