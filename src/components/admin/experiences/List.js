import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  EditButton,
  ListController,
} from "react-admin";

export default (props) => (
  <ListController {...props}>
    {(controllerProps) => (
      <List {...props} {...controllerProps}>
        <Datagrid>
          <TextField source="title" />
          <TextField source="locale" />
          <TextField source="description" multiline />
          <DateField locales="pt-BR" source="beginDate" />
          <TextField source="type" />
          <BooleanField source="hasEnded" />
          <DateField locales="pt-BR" source="endDate" />

          <EditButton />
        </Datagrid>
      </List>
    )}
  </ListController>
);
