import React, { Component } from 'react'
import NewsListItem from '../NewsListItem/NewsListItem.jsx'

import './NewsList.css'


class NewsList extends Component {



  // ComponentWillMount() {
  //   this.props.getAllNews();
  //   console.log('worked')
  // }



  render(){
    console.log(this.props)
    return(
      <div id='news-list-container'>
        <button onClick={this.props.getAllNews}>Get All News</button>
          <p>@_@</p>
      </div>
    )
  }
}

export default NewsList;
