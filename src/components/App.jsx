import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem/NewsListItem.jsx';
import NewsList from '../components/NewsList/NewsList.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newsList: []
    }
  }

componentWillMount(){
  this.getAllNews()
}
  getAllNews() {
    fetch(`/api/news`)
    .then(r => r.json())
    .then(data => {
        this.setState({
          newsList : data
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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Tech Time</h1>
        </div>
        <NewsListItem />
        <p className="App-intro">
          contents from api
        </p>

      <NewsList
        getAllNews={this.renderAllNews.bind(this)}
        newsList={this.state.newsList}
      />

      <footer>
      </footer>
      </div>
    );
  }
}

export default App;
