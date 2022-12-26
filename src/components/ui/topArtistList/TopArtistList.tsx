import { useEffect, useState } from 'react';

import { getArtistList } from '../../../services/api/artists';
import { TArtist } from '../../../types/artist.type';
import TopArtist from '../topArtist/TopArtist';
import './TopArtistList.css';

const TopArtistList = () => {
  const [artists, setArtists] = useState<TArtist[]>([]);
  
  useEffect(() => {
    getArtistList().then((artistList) => setArtists(artistList));
  }, []);
  
  return (
    <div className='content__artists'>
      {artists.map((artist, idx) => <TopArtist artist={artist} key={idx} />)}
    </div>
  );
};

export default TopArtistList;
