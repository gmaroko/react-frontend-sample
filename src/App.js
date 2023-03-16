import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListAllArticles from './components/ListAllArticles';
import CreateArticle from './components/CreateArticle';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        < ListAllArticles />
        < CreateArticle />
      </div>
    </React.Fragment>
  );
}

export default App;
