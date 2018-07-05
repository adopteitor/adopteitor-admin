import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton } from 'react-admin';

export const AnimalFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Team" source="_id" reference="teams" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
   </Filter>
);

export const AnimalList = (props) => (
    <List {...props} filters={<AnimalFilter />}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

const AnimalName = ({ record }) => {
    return <span>Animal {record ? `"${record.name}"` : ''}</span>;
};

export const AnimalEdit = (props) => (
    <Edit name={<AnimalName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const AnimalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
