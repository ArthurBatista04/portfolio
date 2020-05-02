import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
} from "react-admin";

export default (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <ReferenceField label="Icon" source="icon_id" reference="Icons">
        <TextField source="name" />
      </ReferenceField>
      <EditButton redirect={false}/>
    </Datagrid>
  </List>
);
