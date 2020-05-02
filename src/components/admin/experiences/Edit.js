import React from "react";
import {
  Edit,
  SimpleForm,
  DateInput,
  required,
  TextInput,
  FormDataConsumer,
  BooleanInput,
  SelectInput,
} from "react-admin";
const choices = [
  { id: "Work", name: "Work" },
  { id: "School", name: "Work" },
];

export default (props) => (
  <Edit {...props}>
    <SimpleForm redirect={false}>
      <TextInput fullWidth source="title" validate={required()} />
      <TextInput fullWidth source="locale" validate={required()} />
      <TextInput fullWidth source="description" multiline validate={required()} />
      <SelectInput fullWidth source="type" validate={required()} choices={choices} />
      <BooleanInput
        initialValue={false}
        validate={required()}
        source="hasEnded"
      />
      <DateInput source="beginDate" validate={required()} />
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.hasEnded && (
            <DateInput source="endDate" validate={required()} {...rest} />
          )
        }
      </FormDataConsumer>
    </SimpleForm>
  </Edit>
);
