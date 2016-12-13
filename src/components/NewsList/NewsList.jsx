import React, { Component } from 'react'
import NewsListItem from '../NewsListItem/NewsListItem.jsx'

import './NewsList.css'


class NewsList extends Component {
// renderAllNews function won't work in newslist
// works only in App.jsx which i am only able to console log


  // renderAllNews() {
  //   this.props.newsList.sources.map((news, i) =>{
  //     console.log(news)
  //     return(
  //       <NewsListItem
  //         name={news.name}
  //         description={news.description}
  //         url={news.url}
  //         urlLogo={news.urlsToLogos}
  //         />
  //       )
  //   })
  // }

  // ComponentDidMount() {
  //   this.getAllNews();
  //   console.log('worked')
  // }

  // fetch(){
  //   // e.preventDefault();
  //   this.props.getAllNews()
  // }

  render(){
    console.log(this.props)
    return(
      <div id='news-list-container'>
        {this.props.renderAllNews}
      {
      /* <button onClick={this.renderAllNews.bind(this)}>Get All News</button> */}
          <p>@_@</p>
      </div>
    )
  }
}

export default NewsList;
