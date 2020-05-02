import React from "react";
import {
  Edit,
  SimpleForm,
  NumberInput,
  required,
  TextInput,
} from "react-admin";

export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect={false}>
      <NumberInput source="height" validate={required()} />
      <NumberInput source="width" validate={required()} />
      <TextInput fullWidth source="name" validate={required()} />
      <TextInput fullWidth source="viewbox" validate={required()} />
      <TextInput fullWidth source="path" multiline validate={required()} />
    </SimpleForm>
  </Edit>
);
