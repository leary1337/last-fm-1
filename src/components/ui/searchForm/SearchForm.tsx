import React from 'react';

import './SearchForm.css';

interface ISearchForm {
  onSubmit: (value: string) => void;
}

const SearchForm = (props: ISearchForm) => {
  const { onSubmit } = props;
  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const text = formData.get('text') as string || '';
    onSubmit(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' className='search-content__left-search-field' name='text' required />
    </form>
  );
};

export default SearchForm;
