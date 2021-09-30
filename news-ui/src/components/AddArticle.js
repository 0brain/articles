import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			content: '',
			author_name: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://127.0.0.1:8086/articles/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			this.props.history.push('/');
	}

	render() {
		const { title, content, author_name } = this.state

    return (
    <div className="container">

            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add an Article</h2>



        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>

          <div className="form-group">
            <textarea
              className="mt-3 form-control form-control-lg"
              rows="10"
              placeholder="Enter content"
              name="content"
              value={content}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="mt-3 form-control form-control-lg"
              placeholder="Enter your name"
              name="author_name"
              value={author_name}
              onChange={this.changeHandler}
            />
          </div>

          <button className="mt-3 btn btn-primary btn-block" type="submit">Add Article</button>
        </form>
      </div>
    </div>

    </div>
    )
}
}

export default PostForm