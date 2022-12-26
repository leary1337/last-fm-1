import React, { FC } from 'react';

import { TTag } from '../../../types/tag.type';
import './Tag.css';

const Tag: FC<{ tag: TTag }> = ({ tag }) => {
  return (
    <li className='tag'>{tag.name}</li>
  );
};

export default Tag;
