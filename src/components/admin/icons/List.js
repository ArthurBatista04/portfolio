import React from "react";
import { List, Datagrid, TextField, NumberField, EditButton } from "react-admin";

export default (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <NumberField source="height"/>
      <NumberField source="width"/>
      <TextField source="viewbox"/>
      <EditButton/>
    </Datagrid>
  </List>
);
