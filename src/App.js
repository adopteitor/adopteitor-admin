import React from 'react';
// import 'babel-polyfill';
import { Admin, Resource } from 'react-admin';
import { authClient, restClient } from 'aor-feathers-client';
import feathersClient from './feathersClient';
// import { UsersList } from './services/users';
import { AnimalList, AnimalEdit, AnimalCreate } from './services/animals';
import { HumanList, HumanEdit, HumanCreate } from './services/humans';
import { ContractList, ContractEdit, ContractCreate } from './services/contracts';
import { Delete } from 'react-admin';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' }
};

const options = { id: '_id', usePatch: true };

const App = () => (
  <Admin dataProvider={restClient(feathersClient, options)} authProvider={authClient(feathersClient, authClientOptions)}>
    <Resource name="animals" list={AnimalList} create={AnimalCreate} edit={AnimalEdit} remove={Delete} />
    <Resource name="humans" list={HumanList} create={HumanCreate} edit={HumanEdit} remove={Delete} />
    <Resource name="contracts" list={ContractList} create={ContractCreate} edit={ContractEdit} remove={Delete} />
  </Admin>
);

export default App;
