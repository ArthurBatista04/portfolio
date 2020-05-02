import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  required,
  TextInput,
} from "react-admin";

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <NumberInput source="height" validate={required()} />
      <NumberInput source="width" validate={required()} />
      <TextInput fullWidth source="name" validate={required()} />
      <TextInput fullWidth source="viewbox" validate={required()} />
      <TextInput fullWidth source="path" multiline validate={required()} />
    </SimpleForm>
  </Create>
);
