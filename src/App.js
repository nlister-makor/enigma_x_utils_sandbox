import { Grid, AppBar } from "@material-ui/core";
import "./App.css";
import Password from "./Components/Password";
import UrlValidation from "./Components/UrlValidation";
import PhoneValidation from "./Components/PhoneValidation";
import Tags from "./Components/Tags";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Grid container style={{ display: "flex" }} direction="column">
        <Grid item xs={12}></Grid>

        <Password />
        <UrlValidation />
        <PhoneValidation />
        <Tags />
      </Grid>
    </div>
  );
}

export default App;
