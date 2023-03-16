import React, { Component } from "react";
import API from "../config/api";

class CreateArticle extends Component {
    constructor(){
        super();
        this.handleFormData = this.handleFormData.bind(this);
    }

    handleFormData = event => {
        event.preventDefault();
        var formData = new FormData(event.target);

        // create a new article object 
        let newArticle = {
            "id": formData.get("id"),
            "content": formData.get("title"),
            "title": formData.get("content")
        }

        API.post("/articles/add", newArticle).then(res => {
           console.log(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render (){
        return (
            <React.Fragment>
                <form onSubmit={this.handleFormData}>
                    <label for='id'>Article ID</label>
                    <input name='id' id='id' type='number'/>
                    <br />
                    <br />
                    <label for='title'>Article Title</label>
                    <input name='title' id='title' type='tezt'/>
                    <br />
                    <br />
                    <label for='content'>Article Content</label>
                    <input name='content' id='content' type='text'/>
                    <br />
                    <br />

                    <input type='submit' />
                </form>

            </React.Fragment>
        );
    }
}

export default CreateArticle;
