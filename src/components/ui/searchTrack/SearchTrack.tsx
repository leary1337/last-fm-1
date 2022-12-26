import React, { FC } from 'react';

import heart from '../../../assets/heart.svg';
import play from '../../../assets/play.svg';
import { TTrack } from '../../../types/track.type';
import './SearchTrack.css';

const SearchTrack: FC<{ track: TTrack }> = ({ track }) => {
  return (
    <div className='tracks__item'>
      <a href='#' className='tracks__item-link tracks__item-play link'>
        <img className='tracks__item-play__image' src={play} alt='play' />
      </a>
      <img src={track.image} alt={track.name} className='tracks__item-img' />
      <img src={heart} alt='like' className='tracks__item-favorite' />
      <a href='#' className='tracks__item-link tracks__item-name link'>{track.name}</a>
      <a href='#' className='tracks__item-link tracks__item-artist link'>{track.authorName}</a>
      <p className='tracks__item-duration'>4:55</p>
    </div>
  );
};

export default SearchTrack;
