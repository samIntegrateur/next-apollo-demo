import React, { ChangeEvent } from 'react';
import classes from './PeopleSearch.module.css';

interface PeopleSearchProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => unknown;
}

const PeopleSearch: React.FC<PeopleSearchProps> = ({
  onSearch,
}): JSX.Element => {
  return (
    <form className={classes.search}>
      <label htmlFor='search-input' className={classes.search__label}>
        Search for a person
      </label>
      <input
        id='search-input'
        type='search'
        className={classes.search__input}
        onChange={onSearch}
      />
    </form>
  );
};

export default PeopleSearch;
