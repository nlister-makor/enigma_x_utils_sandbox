import "./App.css";
import React from "react";
import {
  Grid,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import Password from "./Components/Password";
import UrlValidation from "./Components/UrlValidation";
import PhoneValidation from "./Components/PhoneValidation";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./Styles";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import IpValidation from "./Components/IpValidation";
import Tags from "./Components/Tags";
import SpecialCharModify from "./Components/SpecialCharModify";
import NumberFormatter from "./Components/NumberFormatter";
import SpaceRemover from "./Components/SpaceRemover";
import EmailDomainValidation from "./Components/EmailDomainValidation";

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleRoute = ( e , routeName ) => {
    history.push(`/${routeName}`);
    setAnchorEl(anchorEl ? null : e.currentTarget);

  };

  return (
    <div>
      <Grid container style={{ display: 'flex' }} direction="column">
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Select utility
              </Typography>
              <IconButton>
                <MenuIcon className={classes.menuButton} onClick={handleClick} />
              </IconButton>
              <Popper style={{ zIndex: 200 }} id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>
                  <MenuList id="simple-menu">
                    <MenuItem onClick={(e) => handleRoute(e, '')}>Password Validation</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'tags')}>Tags Separator</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'url_validation')}>URL Validation</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'phone_validation')}>Phone Validation</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'ip_validation')}>IP Validator</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'special_char_modifier')}>Special char modifier</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'number_formatter')}>Number Formatter</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'space_remover')}>Space Remover</MenuItem>
                    <MenuItem onClick={(e) => handleRoute(e, 'email_validator')}>Email domain validator</MenuItem>
                  </MenuList>
                </div>
              </Popper>
            </Toolbar>
          </AppBar>
        </Grid>
        <Switch>
          <Route exact path="/" component={Password} />
          <Route path="/url_validation" component={UrlValidation} />
          <Route path="/tags" component={Tags} />
          <Route path="/phone_validation" component={PhoneValidation} />
          <Route path="/ip_validation" component={IpValidation} />
          <Route path="/special_char_modifier" component={SpecialCharModify} />
          <Route path="/number_formatter" component={NumberFormatter} />
          <Route path="/space_remover" component={SpaceRemover} />
          <Route path="/email_validator" component={EmailDomainValidation} />
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
