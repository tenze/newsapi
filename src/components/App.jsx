import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem/NewsListItem.jsx';
import NewsList from '../components/NewsList/NewsList.jsx';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newsList: []

    }
  }


  getAllNews() {
    fetch(`/api/news`)
    .then(r => r.json())
    .then(news => {
        this.setState({
          newsList : news
        });
          console.log (this.state.newsList)
          // this.renderAllNews()
    })
      .catch(err => console.log(err))
  }

renderAllNews() {
    this.state.newsList.sources.map((news, i) =>{
      console.log(news)
      return(
        <NewsListItem
          name={news.name}
          description={news.description}
          url={news.url}
          urlLogo={news.urlsToLogos}
          />
        )
    })
  }
componentDidMount(){
  this.getAllNews()
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Tech Time</h1>
        </div>
        <NewsListItem/>
        <p className="App-intro">
          from app.jsx
        </p>

      <NewsList
        getAllNews={this.getAllNews.bind(this)}
        newsList={this.state.newsList}

      />

      <footer>
      </footer>
      </div>
    );
  }
}

export default App;
