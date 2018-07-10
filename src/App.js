import React from 'react';
// import 'babel-polyfill';
import { Admin, Resource } from 'react-admin';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
// import { UsersList } from './services/users';
import { AnimalList, AnimalEdit, AnimalCreate } from './services/animals';
import { Delete } from 'react-admin';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' }
};

const options = { id: '_id', usePatch: true };

const App = () => (
  <Admin dataProvider={restClient(feathersClient, options)} authProvider={authClient(feathersClient, authClientOptions)}>
    <Resource name="animals" list={AnimalList} create={AnimalCreate} edit={AnimalEdit} remove={Delete} />
  </Admin>
);

export default App;
