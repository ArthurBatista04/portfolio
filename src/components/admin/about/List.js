import React from "react";
import {
  List,
  Datagrid,
  RichTextField,
  EditButton,
  ImageField,
} from "react-admin";

export default (props) => (
  <List {...props}>
    <Datagrid>
      <ImageField source="pictures.src" label="Profile Picture"></ImageField>
      <RichTextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
