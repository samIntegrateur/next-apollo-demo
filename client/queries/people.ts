import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query GetPeople {
    people {
      name
      city
      email
      phone
    }
  }
`;

export default GET_PEOPLE;
