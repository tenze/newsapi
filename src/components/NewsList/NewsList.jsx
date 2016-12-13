import React, { Component } from 'react'
import NewsListItem from '../NewsListItem/NewsListItem.jsx'

import './NewsList.css'


class NewsList extends Component {
// renderAllNews function won't work in newslist
// works only in App.jsx which i am only able to console log


  // ComponentDidMount() {
  //   this.getAllNews();
  //   console.log('worked')
  // }

  // fetch(){
  //   // e.preventDefault();
  //   this.props.getAllNews()
  // }

  render(){
    // console.log(this.props)
    // console.log('RENDER ALL NEWS IS BEING CALLED')
    // console.log(this.props.newsList.sources)
    let newsapi = this.props.newsList.sources.map((news, i) =>{
      // console.log(news)
      return(
        <article>
          <NewsListItem
            name={news.name}
            description={news.description}
            url={news.url}
            urlLogo={news.urlsToLogos}
          />
        </article>
        )
    })
    return(
      <div id='news-list-container'>
        {newsapi}

      {
      /* <button onClick={this.renderAllNews.bind(this)}>Get All News</button> */}

      </div>
    )
  }
}

export default NewsList;
