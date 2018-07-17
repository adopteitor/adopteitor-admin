 import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton } from 'react-admin';

export const ContractFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Team" source="_id" reference="teams" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
   </Filter>
);

export const ContractList = (props) => (
    <List {...props} filters={<ContractFilter />}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="animalId" />
            <TextField source="humanId" />
            <TextField source="createdAt" />
            <TextField source="contract" />
            <EditButton />
        </Datagrid>
    </List>
);

const ContractName = ({ record }) => {
    return <span>Contract {record ? `"${record.name}"` : ''}</span>;
};

export const ContractEdit = (props) => (
    <Edit name={<ContractName />} {...props}>
        <SimpleForm>
            <DisabledInput source="_id" />
            <TextInput source="animalId" />
            <TextInput source="humanId" />
            <TextInput source="createdAt" />
            <TextInput source="contract" />
        </SimpleForm>
    </Edit>
);

export const ContractCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
          <TextInput source="animalId" />
          <TextInput source="humanId" />
          <TextInput source="createdAt" />
          <TextInput source="contract" />
        </SimpleForm>
    </Create>
);