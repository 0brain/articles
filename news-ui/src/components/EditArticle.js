import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";


class EditForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      title:'',
      content:'',
      author_name:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getArticleDetails();
  }

  getArticleDetails(){
    let articleId = this.props.match.params.id;
    axios.get(`http://localhost:8086/articles/${articleId}/`)
    .then(response => {
      this.setState({
        id: response.data.id,
        title: response.data.title,
        content: response.data.content,
        author_name: response.data.author_name
      }, () => {
        console.log(this.state);
      });
    })
    .catch(err => console.log(err));
    }

  editArticle(newArticle){
    axios.request({
      method:'put',
      url:`http://localhost:8086/articles/${this.state.id}/`,
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
    this.editArticle(newArticle);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
	render() {

    return (
    <div className="container">

            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit an Article</h2>



        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="title"
              ref="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <textarea
              className="mt-3 form-control form-control-lg"
              rows="10"
              placeholder="Enter content"
              name="content"
              ref="content"
              value={this.state.content}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="mt-3 form-control form-control-lg"
              placeholder="Enter your name"
              name="author_name"
              ref="author_name"
              value={this.state.author_name}
              onChange={this.handleInputChange}
            />
          </div>

          <button className="mt-3 btn btn-primary btn-block" type="submit" value="Save">Edit</button>
        </form>
      </div>
    </div>

    </div>
    )
}
}

export default EditForm