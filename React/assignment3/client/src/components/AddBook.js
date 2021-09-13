import { Component } from 'react'

class AddBook extends Component {
    
    constructor() {
        super()
        this.state = {
            title: "",
            genre: "",
            publisher: "",
            year: "",
            imageURL: ""
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addBook = () => {
        fetch('http://localhost:8080/api/books', {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                 title: this.state.title,
                 genre: this.state.genre,
                 publisher: this.state.publisher,
                 year: this.state.year,
                 imageURL: this.state.imageURL
                })
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                this.props.history.push('/')
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Add a Book Here</h1>
                <input type="text" name="title" placeholder="Title" onChange={this.handleOnChange}/>
                <input type="text" name="genre" placeholder="Genre" onChange={this.handleOnChange} />
                <input type="text" name="publisher" placeholder="Publisher" onChange={this.handleOnChange} />
                <input type="text" name="year" placeholder="Year" onChange={this.handleOnChange} />
                <input type="text" name="imageURL" placeholder="Image URL" onChange={this.handleOnChange} />
                <button onClick={this.addBook}>Add</button>
            </div>
        )
    }
}

export default AddBook