import React, { Component } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import facebook from '../Images/facebook.png';
import googlePlus from '../Images/googlePlus.png'

import './NewsListItem.css';

const { FacebookShareButton, GooglePlusShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const shareUrl = 'github.com';
const title = 'GitHub';

const NewsListItem = props => (
  <div className='news-container'>

   <div className='news-name'>
    <h2>{props.name}</h2>
    </div>

   <div className='news-description'>
    <p>{props.description}</p>
  </div>

  <div className='news-url'>
    <p><a href ={props.url}>WebSite</a></p>
  </div>

  <div className='news-urllogo'>
    <p>{props.urlsToLogos}</p>
  </div>

  <FacebookShareButton
            url={props.url}
            name={name}
            className="btn-f">
            <FacebookIcon
              size={20}
              round />
  </FacebookShareButton>

  <GooglePlusShareButton
            url={props.url}
            name={props.name}
            className="btn-g">
            <GooglePlusIcon
              size={20}
              round />
    </GooglePlusShareButton>

    {/* <button onClick={() => props.handleShare(props.id)}>
     </button>*/}

  </div>
  )

export default NewsListItem;
