import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

class AddForm extends Component{
  addArticle(newArticle){
    axios.request({
      method:'post',
      url:'http://127.0.0.1:8086/articles/',
      data: newArticle
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newArticle = {
      title: this.refs.title.value,
      content: this.refs.content.value,
      author_name: this.refs.author_name.value
    }
    this.addArticle(newArticle);
    e.preventDefault();
  }
  render(){
    return (
    <div className="container">

            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an Article</h2>



        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="title"
              ref="title"
            />
          </div>

          <div className="form-group">
            <textarea
              className="mt-3 form-control form-control-lg"
              rows="10"
              placeholder="Enter content"
              name="content"
              ref="content"

            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="mt-3 form-control form-control-lg"
              placeholder="Enter your name"
              name="author_name"
              ref="author_name"
            />
          </div>

          <button className="mt-3 btn btn-primary btn-block" type="submit">Add</button>
        </form>
      </div>
    </div>

    </div>
    )
}
}

export default AddForm