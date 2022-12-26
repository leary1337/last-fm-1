import React, { FC, useEffect, useState } from 'react';

import { getArtistTags } from '../../../services/api/artists';
import { TArtist } from '../../../types/artist.type';
import { TTag } from '../../../types/tag.type';
import TagList from '../tagList/TagList';
import './TopArtist.css';

const TopArtist: FC<{ artist: TArtist }> = ({ artist }) => {
  const [tags, setTags] = useState<TTag[]>([]);
  
  useEffect(() => {
    getArtistTags(artist.name).then((tagList) => setTags(tagList));
  }, []);
  
  return (
    <div className='content__artistItem'>
      <img className='content__artistItemLogo' src={artist.image} alt='artistLogo' />
      <div className='content__artistItemTitle item-title'>{artist.name}</div>
      <TagList tags={tags} />
    </div>
  );
};

export default TopArtist;
