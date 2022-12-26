import React, { useEffect, useState } from 'react';

import { getTracks } from '../../../services/api/tracks';
import { TTrack } from '../../../types/track.type';
import TopTrack from '../topTrack/TopTrack';
import './TopTrackList.css';

const TopTrackList = () => {
  const [tracks, setTracks] = useState<TTrack[]>([]);
  
  useEffect(() => {
    getTracks().then((trackList) => setTracks(trackList));
  }, []);
  
  return (
    <div className='content__tracks'>
      {tracks.map((track, idx) => <TopTrack track={track} key={idx} />)}
    </div>
  );
};

export default TopTrackList;
