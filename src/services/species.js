 import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton, BooleanInput, BooleanField } from 'react-admin';

export const SpecieFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Team" source="_id" reference="teams" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
   </Filter>
);

export const SpecieList = (props) => (
    <List {...props} filters={<SpecieFilter />}>
        <Datagrid>
            <TextField source="displayName" />
            <BooleanField source="default" />
            <EditButton />
        </Datagrid>
    </List>
);

const SpecieName = ({ record }) => {
    return <span>Specie {record ? `"${record.name}"` : ''}</span>;
};

export const SpecieEdit = (props) => (
    <Edit name={<SpecieName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="displayName" />
            <BooleanInput label="default?" source="default" />
        </SimpleForm>
    </Edit>
);

export const SpecieCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="displayName" />
          <BooleanInput label="default?" source="default" />
        </SimpleForm>
    </Create>
);
