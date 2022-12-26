import React, { FC } from 'react';

import { TAlbum } from '../../../types/album.type';
import { TArtist } from '../../../types/artist.type';
import './SearchCardItem.css';

const SearchCardItem: FC<{ item: TArtist | TAlbum }> = ({ item }) => {
  return (
    <div className='card-item'>
      <img src={item.image} alt={item.name} className='card-item__image' />
      <div className='card-item__details'>
        <p className='card-item__title'>{item.name}</p>
        <p className='card-item__subtitle'>{item.subtitle}</p>
      </div>
    </div>
  );
};

export default SearchCardItem;
