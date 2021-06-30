import React from 'react';
import { TPeople } from '../../../types/common';
import classes from './PeopleList.module.css';
import Card from '../../../UI/Card/Card';

interface PeopleListProps {
  people: TPeople[];
}

const PeopleList: React.FC<PeopleListProps> = ({ people }): JSX.Element => {
  return (
    <div>
      <ul className={classes.peopleList}>
        {people.map((person) => (
          <li key={person.name} className={classes.peopleList__item}>
            <Card cardTitle={person.name}>
              <p>
                <b>City:</b> {person.city}
              </p>
              <p>
                <b>Email:</b> {person.email}
              </p>
              <p>
                <b>Phone number:</b> {person.phone}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
