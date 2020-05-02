import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";
export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect={false}>
      <TextInput fullWidth source="name" validate={required()} />
      <TextInput fullWidth source="description" />
      <ReferenceInput label="Icon" source="icon_id" reference="Icons">
        <SelectInput  optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
