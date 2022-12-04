// MyComponent.jsx

import React, {useState} from 'react';
import {graphql} from 'react-relay';
import PeriqlesForm from 'periqles';

const EDIT_MEDIA =  graphql`
  mutation UserProfile_AddUserMutation($input: AddUserInput!) {
    addUser(input: $input) {
      username
      password
      email
      gender
      pizzaTopping
      age
    }
  }`;

const MyComponent = ({relay}) => {
  return (<div>
     <h1>Sign Up</h1>
     <PeriqlesForm
      mutationName={'AddUser'}
      mutationGQL={EDIT_MEDIA}
      environment={relay.environment}
     />
  </div>);
};