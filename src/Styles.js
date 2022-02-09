import {
    Button,
  makeStyles,
  withStyles,
 
} from "@material-ui/core";

export const useStyles = makeStyles({
  blueShape: {
    backgroundColor: "#1C67FF",
    borderRadius: "8px",
    height: "12px",
    marginBottom: "10px",
  },
  menuButton: {
    marginRight: "12px",
    color : "#FFFFFF",
  },
  paper:{
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    border : '1px solid #000'
  }
});


export const StyledButton = withStyles(() => ({
    root :{
        marginLeft: "50%",
        textTransform: "none",
        fontSize: "12px",
        backgroundColor: "#1C67FF",
        color: "#ffffff",
    }
}))(Button)