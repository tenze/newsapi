import React, { Component } from 'react';
import NewsListItem from '../components/NewsListItem/NewsListItem.jsx';
import NewsList from '../components/NewsList/NewsList.jsx';
import './normalize.css';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newsList: {
        "sources" : [
          {
            "id": "ars-technica",
            "name": "Ars Technica",
            "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
            "url": "http://arstechnica.com",
            "category": "technology",
            "language": "en",
            "country": "us",
            "urlsToLogos": {
              "small": "http://i.newsapi.org/ars-technica-s.png",
              "medium": "http://i.newsapi.org/ars-technica-m.png",
              "large": "http://i.newsapi.org/ars-technica-l.png"
            }
          },

        ]
      },
      name: '',
      urlSelected: ''
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
          <h1>Tech Site</h1>
          <p><span>Get the latest news on Tech from from these sites</span></p>
        </div>

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
