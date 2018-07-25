 import React from 'react';
import { Filter, DisabledInput, ReferenceInput, List, Edit, Create, SimpleForm, Datagrid, TextField, SelectInput, TextInput, EditButton, DateInput, DateField } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

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
            <TextField source="name" />
            <TextField source="stage" />
            <TextField source="sex" />
            <TextField source="location" />
            <TextField source="status" />
            <DateField source="entryDate" />
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
            <SelectInput source="stage" choices={[
                { id: 'puppy', name: 'Puppy' },
                { id: 'adult', name: 'Adult' },
                { id: 'oldie', name: 'Oldie' },
            ]} />
            <DateInput source="dateOfBirth" />
            <RichTextInput source="description" />
            <SelectInput source="sex" choices={[
                { id: 'male', name: 'Male' },
                { id: 'female', name: 'Female' },
                { id: 'other', name: 'Other' },
            ]} />
            <ReferenceInput label="species" reference="species" source="specie">
            <SelectInput optionText="displayName" />
            </ReferenceInput>
            <TextInput source="location" />
            <ReferenceInput label="breeds" reference="breeds" source="breed">
              <SelectInput optionText="displayName" />
            </ReferenceInput>
            <DateInput source="entryDate" />
            <SelectInput source="status" choices={[
                { id: 'inAdoption', name: 'In Adoption' },
                { id: 'adopted', name: 'adopted' },
                { id: 'other', name: 'Other' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const AnimalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <SelectInput source="stage" choices={[
                { id: 'puppy', name: 'Puppy' },
                { id: 'adult', name: 'Adult' },
                { id: 'oldie', name: 'Oldie' },
            ]} />
            <TextInput source="dateOfBirth" />
            <RichTextInput source="description" />
            <SelectInput source="sex" choices={[
                { id: 'male', name: 'Male' },
                { id: 'female', name: 'Female' },
                { id: 'other', name: 'Other' },
            ]} />
            <TextInput source="location" />
            <ReferenceInput label="species" source="specie" reference="species">
              <SelectInput optionText="displayName" />
            </ReferenceInput>
            <ReferenceInput label="breed" source="breed" reference="breeds">
              <SelectInput optionText="displayName" />
            </ReferenceInput>
            <DateInput source="entryDate" />
            <SelectInput source="status" choices={[
                { id: 'inAdoption', name: 'In Adoption' },
                { id: 'adopted', name: 'adopted' },
                { id: 'other', name: 'Other' },
            ]} />
        </SimpleForm>
    </Create>
);
