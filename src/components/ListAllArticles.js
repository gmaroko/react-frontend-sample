import React, {useState} from "react";
import API from "../config/api";

function ListAllArticles() {
    let [listOfArticles, setListOfArticles] = useState([]) 

    // let listOfArticles = null;
    API.get("articles").then(res => {
        setListOfArticles(res.data);
    }).catch(err => {
        console.log(err);
    });

    return (
      <React.Fragment>
        { listOfArticles.map(article => 
            <div>
                <p> {article.title} </p> 
                <p> {article.content} </p> 
                <p> {article.datePosted} </p> 
                <br />
                < hr />
            </div>
            )}
      </React.Fragment>
    );
  }
  
  export default ListAllArticles;