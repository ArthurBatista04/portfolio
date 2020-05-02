import React from "react";
import { Edit, SimpleForm, required, ImageInput,ImageField } from "react-admin";
import RichTextInput from "ra-input-rich-text";

export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect={false}>
      <ImageInput source="pictures" label="Related pictures" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
      <RichTextInput fullWidth validate={required()} source="body" />
    </SimpleForm>
  </Edit>
);
