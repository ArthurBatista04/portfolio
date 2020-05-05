import * as React from "react";
import { Admin, Resource } from "react-admin";
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
import {dataProvider,authProvider,history} from '../constants'
const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: grey,
    error: red,
  },
});


class FirebaseAdmin extends React.Component {
  render() {
    return (
      <Admin
        theme={theme}
        history={history}
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
