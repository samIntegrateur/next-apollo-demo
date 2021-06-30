import React, { ChangeEvent, useEffect, useState } from 'react';
import PeopleList from './PeopleList/PeopleList';
import Container from '../../layout/Container/Container';
import PeopleSearch from './PeopleSearch/PeopleSearch';
import { useLazyQuery, useQuery } from '@apollo/client';
import { TPeople, TPeopleData } from '../../types/common';
import GET_PEOPLE from '../../queries/people';
import Loader from '../../UI/Loader/Loader';
import Button from '../../UI/Button/Button';
import classes from './People.module.css';

const People: React.FC = (): JSX.Element => {
  const [filteredPeople, setFilteredPeople] = useState<TPeople[]>([]);

  const { loading, error, data } = useQuery<TPeopleData>(GET_PEOPLE);
  // const [getPeople, { loading, error, data }] =
  //   useLazyQuery<TPeopleData>(GET_PEOPLE);

  useEffect(() => {
    setFilteredPeople(data?.people || []);
  }, [data]);

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!data || !data.people) {
      return;
    }

    const inputText: string = e.target.value;

    if (inputText.length < 3) {
      setFilteredPeople(data.people);
    } else {
      const newList: TPeople[] = data.people.filter((person) => {
        return person.name.startsWith(inputText);
      });
      setFilteredPeople(newList);
    }
  };

  return (
    <>
      <Container>
        <PeopleSearch onSearch={onSearchHandler} />
      </Container>
      <Container>
        {loading ? (
          <Loader />
        ) : error || !data || !data.people ? (
          <p className='error'>
            An error has occurred. We apologize for the inconvenience.
          </p>
        ) : data.people.length ? (
          <>
            <PeopleList people={filteredPeople} />

            {/*<div className={classes.buttonWrapper}>*/}
            {/*  <Button fullOnSm>Load more</Button>*/}
            {/*</div>*/}
          </>
        ) : (
          <p>No results.</p>
        )}
      </Container>
    </>
  );
};

export default People;
