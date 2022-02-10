import { Button, Grid, TextField, Typography, Chip } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { StyledButton, useStyles } from '../Styles'
import { removeSpaces   } from 'enigma-x-utilities'
import { useState } from 'react'

function SpaceRemover() {
    
    const classes = useStyles();
    const [text, setText] = useState("");
    const [editedText, setEditedText] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState();

    const handleChange = (e) => {
        if(editedText.length){
            setEditedText("")
        }
        setText(e.target.value);
    }

    const handleClick = () => {

       let outputText = removeSpaces(text).data
       console.log("outputText", outputText)
       setEditedText(outputText);
       console.log("calling the func", removeSpaces  (text));
       setText("");
       setMessage('')
       setSuccess()
    }
  
    return (
        <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9', marginTop: 10 }}>
            <Grid container alignItems="center" justifyContent="space-evenly" style={{ paddingBlock: '10px' }}>
                <Grid item xs={2} className={classes.blueShape} />
                <Grid item xs={12} style={{ marginBottom: 20 }}>
                    <Typography style={{ textAlign: 'center', fontSize: 18 }}> Space Remover</Typography>
                </Grid>
                <Grid item xs={8} style={{ height: 40 }}>
                     {success == true ? <Alert severity="success">{message}</Alert> : success == false && <Alert severity="error">{message}</Alert>}
                </Grid>
                <Grid item xs={5}>
                    <TextField 
                    name="text" 
                    label="Enter Text with Unneeded Spaces" variant="outlined" style={{ width: '150%' }} value={text} onChange={handleChange} />
                </Grid>
                <Grid item xs={5} >
                    <StyledButton onClick={handleClick} >Remove Spaces</StyledButton>
                <Grid container></Grid>
                </Grid>
                <Grid item xs={11} style={{ textAlign: 'left', padding: 12, border: "1px solid #1C67FF", marginTop: 20 }}>
                    {editedText.length ? (
                        <Grid container className={classes.chipContainer}>
                            <Typography>{editedText}</Typography>
                        </Grid>
                    ) : null}
                </Grid>
            </Grid>
        </Grid> 
     )
}

export default SpaceRemover