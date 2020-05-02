import React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required } from "react-admin";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput fullWidth source="name" validate={required()} />
      <TextInput fullWidth source="description" />
      <ReferenceInput label="Icon" source="icon_id" reference="Icons">
        <SelectInput  fullWidth optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
