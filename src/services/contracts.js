 import React from 'react';
import { Filter, DisabledInput, List, Edit, Create, SimpleForm, Datagrid, TextField, TextInput, EditButton } from 'react-admin';

export const ContractFilter = (props) => (
   <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
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
