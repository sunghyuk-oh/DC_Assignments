import { Component } from "react";
import './MainContent.css'

class MainContent extends Component {
    render() {
        const articles = this.props.articleItems.map((article) => {
            return (
                <div className="eachArticle">
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                    <div className="moreInfoBox">
                        <h5>{article.comments} comments</h5>
                        <h5>{article.likes} likes</h5>
                    </div>
                </div>
            )
        })

        return (
            <div className="main-content">{articles}</div>
        )
    }
}

export default MainContent