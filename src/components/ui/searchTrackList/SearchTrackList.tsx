import React, { FC } from 'react';

import { TTrack } from '../../../types/track.type';
import SearchTrack from '../searchTrack/SearchTrack';

const SearchTrackList: FC<{ tracks: TTrack[] }> = ({ tracks }) => {
  if (!tracks.length)
    return <></>;
  return (
    <div className='search-content__wrapper'>
      <h2 className='search-content__left-subtitle'>Tracks</h2>
      <div className='tracks'>
        {tracks.map((track, idx) => <SearchTrack track={track} key={idx} />)}
      </div>
      <p className='more-link'><a className='more-link__item link' href='#'>More tracks</a></p>
    </div>
  );
};

export default SearchTrackList;
