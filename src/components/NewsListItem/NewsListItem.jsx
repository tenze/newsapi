import React, { Component } from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import facebook from '../Images/facebook.png';
import googlePlus from '../Images/googlePlus.png'

import './NewsListItem.css';

const { FacebookShareButton, GooglePlusShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const GooglePlusIcon = generateShareIcon('google');
const shareUrl = 'http://github.com';
const title = 'GitHub';

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
  <div className="social">
     <FacebookShareButton
            url={shareUrl}
            name={title}
            className="btn-f">
            <FacebookIcon
              size={20}
              round />
      </FacebookShareButton>

       <GooglePlusShareButton
            url={shareUrl}
            name={props.name}
            className="btn-g">
            <GooglePlusIcon
              size={20}
              round />
          </GooglePlusShareButton>
      </div>
    <button onClick={() => props.handleShare(props.id)}>
    </button>

  </div>
  )

export default NewsListItem;
