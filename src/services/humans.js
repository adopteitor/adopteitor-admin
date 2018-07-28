 import React from 'react';
import { Filter, DisabledInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton } from 'react-admin';

export const HumanFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
   </Filter>
);

export const HumanList = (props) => (
    <List {...props} filters={<HumanFilter />}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="email" />
            <TextField source="role" />
            <EditButton />
        </Datagrid>
    </List>
);

const HumanName = ({ record }) => {
    return <span>Human {record ? `"${record.name}"` : ''}</span>;
};

export const HumanEdit = (props) => (
    <Edit name={<HumanName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="dateOfBirth" />
            <TextInput source="phone" />
            <TextInput label="Email Address" source="email" type="email" />
            <TextInput source="password" type="password" />
            <TextInput source="city" />
            <SelectInput source="role" choices={[
                { id: 'admin', name: 'Admin' },
                { id: 'user', name: 'User' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const HumanCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="firstName" />
          <TextInput source="lastName" />
          <TextInput source="dateOfBirth" />
          <TextInput source="phone" />
          <TextInput label="Email Address" source="email" type="email" />
          <TextInput source="password" type="password" />
          <TextInput source="city" />
          <SelectInput source="role" choices={[
              { id: 'admin', name: 'Admin' },
              { id: 'user', name: 'User' },
          ]} />
        </SimpleForm>
    </Create>
);
