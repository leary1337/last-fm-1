import React, { FC } from 'react';

import { TTag } from '../../../types/tag.type';
import Tag from '../tag/Tag';
import './TagList.css';

const TagList: FC<{ tags: TTag[] }> = ({ tags }) => {
  return (
    <ul className='tags'>
      {tags.map((tag, idx) => <Tag tag={tag} key={idx} />)}
    </ul>
  );
};

export default TagList;
