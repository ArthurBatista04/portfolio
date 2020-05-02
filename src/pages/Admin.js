import * as React from "react";
import { Admin, Resource } from "react-admin";

import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import * as Skills from "../components/admin/skills";
import * as Icons from "../components/admin/icons";
import * as About from "../components/admin/about";
import * as Experiences from "../components/admin/experiences";
import { createMuiTheme } from "@material-ui/core/styles";
import { grey, red } from "@material-ui/core/colors";
import SkillIcon from "@material-ui/icons/FitnessCenter";
import Icon from "@material-ui/icons/Star";
import AboutIcon from "@material-ui/icons/Person";
import ExperienceIcon from "@material-ui/icons/Work";
const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: grey,
    error: red,
  },
});
const config = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

const options = {};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class FirebaseAdmin extends React.Component {
  render() {
    return (
      <Admin
        theme={theme}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="Abouts"
          list={About.List}
          edit={About.Edit}
          create={About.Create}
          icon={AboutIcon}
        ></Resource>
        <Resource
          name="Experiences"
          list={Experiences.List}
          edit={Experiences.Edit}
          create={Experiences.Create}
          icon={ExperienceIcon}
        ></Resource>
        <Resource
          name="Icons"
          list={Icons.List}
          edit={Icons.Edit}
          create={Icons.Create}
          icon={Icon}
        ></Resource>
        <Resource
          name="Skills"
          list={Skills.List}
          edit={Skills.Edit}
          create={Skills.Create}
          icon={SkillIcon}
        ></Resource>
      </Admin>
    );
  }
}

export default FirebaseAdmin;
