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
  },
  chipContainer:{
    marginTop: "10px",
    marginLeft: 5,
  },
  chipItem: {
    marginBottom: "5px",
    marginRight: "3px",
        },
    chip: {
    backgroundColor: "#EDEFF3",
    border: "none"
        },
});


export const StyledButton = withStyles(() => ({
    root :{
        marginLeft: "50%",
        textTransform: "none",
        fontSize: "12px",
        backgroundColor: "#1C67FF",
        color: "#ffffff",
        '&:hover': {
          backgroundColor: '#1c67ffb3',
        },
      }
}))(Button)