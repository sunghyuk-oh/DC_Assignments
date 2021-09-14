import { useState } from 'react'


function AddBook(props) {
    const [book, setBook] = useState({})

    const handleOnChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleAddBook = () => {
        fetch('http://localhost:8080/api/add-book', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        })
        .then(response => response.json())
        .then((result) => {
            if (result.success) {
                props.history.push('/')
            }
        })
    }

    return(
        <div className="add-book">
            <h1>Add Book</h1>
            <input type="text" name="title" placeholder="Title" onChange={handleOnChange} />
            <input type="text" name="genre" placeholder="Genre" onChange={handleOnChange} />
            <input type="text" name="publisher" placeholder="Publisher" onChange={handleOnChange} />
            <input type="text" name="year" placeholder="Year" onChange={handleOnChange} />
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleOnChange} />
            <button onClick={handleAddBook}>Add Book</button>
        </div>
    )
}

export default AddBook