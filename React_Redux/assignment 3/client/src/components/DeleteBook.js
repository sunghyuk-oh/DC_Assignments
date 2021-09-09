import { Component } from 'react'

class DeleteBook extends Component {
    constructor() {
        super()
        this.state = {
            title: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    deleteBook = () => {
        fetch("http://localhost:8080/api/delete-book", {
            method: "DELETE",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                title: this.state.title
            })
        }).then(response => response.json())
        .then(result => {
            if (result.success) {
                this.props.history.push('/')
            } else {
                alert('Title is not found')
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Delete a Book Here</h1>
                <input type="" onChange={this.handleOnChange} placeholder="Title of the book" />
                <button onClick={this.deleteBook}>Delete</button>
            </div>
        )
    }
}

export default DeleteBook