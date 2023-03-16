import React, {Component} from "react";
import API from "../config/api";
import CreateArticle from "./CreateArticle";
import ArticleDetails from "./ArticleDetails";

class ListAllArticles extends Component {
    constructor(props){
        super(props)
        this.state = {
            allArticles: []
        }

        this.getAllArticles = this.getAllArticles.bind(this);
    } 


    async getAllArticles(){
        // use await instead of a callback function (then and catch)
        const backendResponse = await API.get("/articles");
        this.setState({allArticles: backendResponse});
    }

    render (){
        return (
            <React.Fragment>
                { this.state.allArticles.map(article => 
                    <div>
                        <p> {article.title} </p> 
                        <p> {article.content} </p> 
                        <p> {article.datePosted} </p> 
                        <br />
                        < hr />
                        {/* 
                            On each article display ArticleDetails component.
                            We need to pass the article id to the component!
                         */}
                        < ArticleDetails id={article.id}/>
                    </div>
                )}                
            </React.Fragment>
          );
    }
}
  
  export default ListAllArticles;