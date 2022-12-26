import React, { FC } from 'react';

import { TArtist } from '../../../types/artist.type';
import SearchCardItem from '../searchCardItem/SearchCardItem';

const SearchArtistList: FC<{ artists: TArtist[] }> = ({ artists }) => {
  if (!artists.length)
    return <></>;
  return (
    <div className='search-content__wrapper'>
      <h2 className='search-content__left-subtitle'>Artists</h2>
      <div className='card-items'>
        {artists.map((artist, idx) => <SearchCardItem item={artist} key={idx} />)}
      </div>
      <p className='more-link'><a className='more-link__item link' href='#'>More artists</a></p>
    </div>
  );
};

export default SearchArtistList;
