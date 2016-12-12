import React, { Component } from 'react';
import './NewsListItem.css';

    const NewsListItem = props => (
   <div className='news-list-item'>
    <p>{props.name}</p>
   <div className='news-description'>
    <p>{props.description}</p>
  </div>
  <div className='news-url'>
    <p>{props.url}</p>
  </div>
  <div className='news-urllogo'>
    <p>{props.urlsToLogos}</p>
  </div>

    <button onClick={() => props.handleShare(props.id)}>
      Share
    </button>

  </div>
  )

export default NewsListItem;
