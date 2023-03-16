import React, { Component } from "react";
import API from "../config/api";


class ArticleDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            articleId: props.id,
            article: null
        }
        this.getArticleDetails = this.getArticleDetails.bind(this);
        this.deleteArticleById = this.deleteArticleById.bind(this);
        this.updateArticle = this.updateArticle.bind(this);
    }

    async getArticleDetails(articleId){
        // call backend endpoint to retrieve single article "/article/:id"
        const backendResponse = await API.get(`/articles/${articleId}`);
        if(backendResponse){
            this.setState({article: backendResponse})
        }
    }

    async deleteArticleById(){
        // call backend endpoint to delete single article "/article/:id"
        let articleId = this.state.articleId;
        const backendResponse = await API.delete(`/articles/${articleId}`);
        if(backendResponse){
            this.setState({article: {}})
        }
    }

    async updateArticle(updatedArticle){
        // call backend endpoint update article 
        const backendResponse = await API.update("/articles", updatedArticle);
        if(backendResponse){
            this.setState({article: backendResponse})
        }
    }

    render (){
        return (
            <React.Fragment>
                {this.getArticleDetails}
                <div>
                    <p> {this.state.article.title}</p>
                    <p> {this.state.article.content}</p>
                    <p> {this.state.article.datePosted}</p>

                    {/* Create map to display article comments */}
                    <button onClick={this.deleteArticleById}>
                        Delete This Article
                    </button>
                </div>
            </React.Fragment>
        );
    }

}

export default ArticleDetails;