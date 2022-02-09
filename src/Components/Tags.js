import { Button, Grid, TextField, Typography, Chip } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { StyledButton, useStyles } from '../Styles'
import { tagsSeparator, setConfig } from 'enigma-x-utilities'
import { useState } from 'react'

function Tags() {

const classes = useStyles();
const [text, setText] = useState("");
const [tags, setTags] = useState([]);
const [message, setMessage] = useState("");
const [success, setSuccess] = useState();

const handleChange =(e) => {
    if(tags.length){
        setTags([])
    }
    setText(e.target.value);
}

const handleClick = () => {
        //It is optional to call setConfig with 
        // setConfig('tags', {
        //     separators: [" "],
        // });
       let textTags = tagsSeparator(text).data
       setTags(textTags)
       console.log("calling the func", tagsSeparator(text))
       setText("")
}





  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9' , marginTop: 10}}>
      <Grid container alignItems='center' justifyContent='space-evenly' style={{paddingBlock : '10px'}}>
      <Grid item xs={2} className={classes.blueShape}/>
      <Grid item xs={12} style={{marginBottom: 20}} >
        <Typography style={{textAlign: 'center', fontSize : 18}}> Tags Separator</Typography>
      </Grid>
      <Grid item xs={8} style={{height: 40}}>
        {success == true ? <Alert severity='success'>{message}</Alert> : success == false && <Alert severity='error'>{message}</Alert>}
      </Grid>
      <Grid item xs={5}>
                <TextField
                    name="text"
                    label='Enter Text to be split into tags'
                    variant='outlined'
                    style={{ width: '150%' }}
                    value={text}
                    onChange={handleChange}
                />
            
      </Grid>
    <Grid item xs={5}>
        <StyledButton onClick={handleClick}>
        Create Tags
        </StyledButton>
        <Grid container></Grid>
    </Grid>
        <Grid item xs={11} style={{ height: 60 , textAlign: "center" }}>
        {tags.length ?   
            <Grid container className={classes.chipContainer}>
              {tags.map(item => (
                <Grid
                  item
                  key={item}
                  className={classes.chipItem}
                >
                  <Chip
                    variant="outlined"
                    label={`#${item}`}
                    className={classes.chip}
                  />
                </Grid>
              ))}
            </Grid>
           : null
            }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Tags