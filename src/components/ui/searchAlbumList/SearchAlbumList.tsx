import React, { FC } from 'react';

import { TAlbum } from '../../../types/album.type';
import SearchCardItem from '../searchCardItem/SearchCardItem';

const SearchAlbumList: FC<{ albums: TAlbum[] }> = ({ albums }) => {
  if (!albums.length)
    return <></>;
  return (
    <div className='search-content__wrapper'>
      <h2 className='search-content__left-subtitle'>Albums</h2>
      <div className='card-items'>
        {albums.map((album, idx) => <SearchCardItem item={album} key={idx} />)}
      </div>
      <p className='more-link'><a className='more-link__item link' href='#'>More albums</a></p>
    </div>
  );
};

export default SearchAlbumList;
