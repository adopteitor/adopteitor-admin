 import React from 'react';
import { Filter, DisabledInput, List, Edit, Create, SimpleForm, Datagrid, TextField, TextInput, EditButton, BooleanInput, BooleanField } from 'react-admin';

export const BreedFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
   </Filter>
);

export const BreedList = (props) => (
    <List {...props} filters={<BreedFilter />}>
        <Datagrid>
            <TextField source="displayName" />
            <BooleanField source="default" />
            <EditButton />
        </Datagrid>
    </List>
);

const BreedName = ({ record }) => {
    return <span>Breed {record ? `"${record.name}"` : ''}</span>;
};

export const BreedEdit = (props) => (
    <Edit name={<BreedName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="displayName" />
            <BooleanInput label="default?" source="default" />
        </SimpleForm>
    </Edit>
);

export const BreedCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="displayName" />
          <BooleanInput label="default?" source="default" />
        </SimpleForm>
    </Create>
);
