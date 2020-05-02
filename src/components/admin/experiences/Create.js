import React from "react";
import {
  Create,
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
  { id: "School", name: "School" },
];

export default (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput fullWidth source="title" validate={required()} />
      <TextInput fullWidth source="locale" validate={required()} />
      <TextInput
        fullWidth
        source="description"
        multiline
        validate={required()}
      />
      <SelectInput fullWidth  source="type" validate={required()} choices={choices} />
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
  </Create>
);
