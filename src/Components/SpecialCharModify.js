import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { StyledButton, useStyles } from '../Styles'
import { specialCharsModifier } from 'enigma-x-utilities'

import { useEffect, useState } from 'react'

function SpecialCharModify() {
  const classes = useStyles()
  const [specialChar, setSpecialChar] = useState('')
  const [processedSpecialChar, setProcessedSpecialChar] = useState(undefined)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(undefined)
  const CheckSpecialChar = () => {
    const specialCharResponse = specialCharsModifier(specialChar)
    console.log(specialCharResponse,"here")
    if (specialCharResponse.success) {
      setMessage(specialCharResponse.message)
      setProcessedSpecialChar(specialCharResponse.data)
      setSuccess(specialCharResponse.success)
    } else {
      setMessage(specialCharResponse.message)
      setSuccess(specialCharResponse.success)
    }
  }
  useEffect(() => {}, [specialChar])

  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9' , marginTop: 10}}>
      <Grid container alignItems='center' justifyContent='space-evenly' style={{paddingBlock : '10px'}}>
      <Grid item xs={2} className={classes.blueShape}/>
        <Grid item xs={12}>
          <Typography style={{textAlign: 'center', fontSize : 18}}>Special Char Validator</Typography>
        </Grid>
        <Grid item xs={8} style={{height: 60}}>
          {success == true ? <Alert severity='success'>{message}</Alert> : success == false && <Alert severity='error'>{message}</Alert>}
        </Grid>
        <Grid item xs={5}>
          <TextField
            id='outlined-basic'
            label='Enter Text'
            variant='outlined'
            style={{ width: '150%' }}
            onChange={(e) => {
                setSpecialChar(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <StyledButton onClick={(e) => CheckSpecialChar(e)}>
            Modify String 
          </StyledButton>
          <Grid container></Grid>
        </Grid>
        <Grid item xs={11} style={{ height: 60 , textAlign: "center" }}>
        {processedSpecialChar && <h3> Text: {processedSpecialChar}</h3>}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SpecialCharModify
