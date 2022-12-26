import React, { FC, useEffect, useState } from 'react';

import { getTrackTags } from '../../../services/api/tracks';
import { TTag } from '../../../types/tag.type';
import { TTrack } from '../../../types/track.type';
import TagList from '../tagList/TagList';
import './TopTrack.css';

const TopTrack: FC<{ track: TTrack }> = ({ track }) => {
  const [tags, setTags] = useState<TTag[]>([]);
  
  useEffect(() => {
    getTrackTags(track.authorName, track.name).then((tagList) => setTags(tagList));
  }, []);
  
  return (
    <div className='content__trackItem'>
      <div className='content__trackItemLeft'>
        <img className='content__trackItemLogo' src={track.image} alt='trackLogo' />
      </div>
      
      <div className='content__trackItemRight'>
        <div className='content__trackItemTitle item-title'>{track.name}</div>
        <p className='content__trackItemAuthor'>{track.authorName}</p>
        <TagList tags={tags} />
      </div>
    </div>
  );
};

export default TopTrack;
