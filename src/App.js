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
import SpecialCharModify from "./Components/SpecialCharModify";
function App() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const hendleRoute = ( e , routeName ) => {
    history.push(`/${routeName}`);
    setAnchorEl(anchorEl ? null : e.currentTarget);

  };

  return (
    <div>
      <Grid container style={{ display: "flex" }} direction="column">
        <Grid item xs={12}>
          <AppBar  position="static">
            <Toolbar variant="dense">
              <IconButton>
                <MenuIcon
                  className={classes.menuButton}
                  onClick={handleClick}
                />
              </IconButton>
              <Popper style={{zIndex:200}} id={id} open={open} anchorEl={anchorEl}>
                <div className={classes.paper}>
                  <MenuList id="simple-menu">
                    <MenuItem onClick={(e) => hendleRoute(e , "")}>Password Validation</MenuItem>
                    <MenuItem onClick={(e) => hendleRoute(e , "urlValidation")}>URL Validation</MenuItem>
                    <MenuItem onClick={(e) => hendleRoute(e , "phonevalidation")}>Phone Validation</MenuItem>
                    <MenuItem onClick={(e)=> hendleRoute (e,"ipValidation")}>IP Validator</MenuItem>
                    <MenuItem onClick= {(e)=> hendleRoute(e,"SpecialCharModifier")}>Special char modifier</MenuItem>
                  </MenuList>
                </div>
              </Popper>
              <Typography variant="h6" color="inherit">
                Select utility
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Switch>
          <Route exact path="/" component={Password} />
          <Route path="/urlValidation" component={UrlValidation} />
          <Route path="/phonevalidation" component={PhoneValidation} />
          <Route path="/ipValidation" component={IpValidation}/>
          <Route path ="/SpecialCharModifier" component={SpecialCharModify}/>
        </Switch>
      </Grid>
    </div>
  );
}

export default App;
