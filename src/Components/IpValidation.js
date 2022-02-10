import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { StyledButton, useStyles } from '../Styles'
import { ValidateIPaddress } from 'enigma-x-utilities'

import { useEffect, useState } from 'react'

function IpValidation() {
  const classes = useStyles()
  const [Ip, setIP] = useState('')
  const [processedIp, setProcessedIp] = useState(undefined)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(undefined)
  const CheckIp = () => {
    const ipResponse = ValidateIPaddress(Ip)
    console.log(ipResponse,"here")
    if (ipResponse.success) {
      setMessage(ipResponse.message)
      setProcessedIp(ipResponse.data)
      setSuccess(ipResponse.success)
    } else {
      setMessage(ipResponse.message)
      setSuccess(ipResponse.success)
    }
  }
  useEffect(() => {}, [Ip])

  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9' , marginTop: 10}}>
      <Grid container alignItems='center' justifyContent='space-evenly' style={{paddingBlock : '10px'}}>
      <Grid item xs={2} className={classes.blueShape}/>
        <Grid item xs={12}>
          <Typography style={{textAlign: 'center', fontSize : 18}}>Ip Validator</Typography>
        </Grid>
        <Grid item xs={8} style={{height: 60}}>
          {success == true ? <Alert severity='success'>{message}</Alert> : success == false && <Alert severity='error'>{message}</Alert>}
        </Grid>
        <Grid item xs={5}>
          <TextField
            id='outlined-basic'
            label='Enter Ip'
            variant='outlined'
            style={{ width: '150%' }}
            onChange={(e) => {
              setIP(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <StyledButton onClick={(e) => CheckIp(e)}>
            Check Ip
          </StyledButton>
          <Grid container></Grid>
        </Grid>
        <Grid item xs={11} style={{ height: 60 , textAlign: "center" }}>
        {processedIp && <h3> IP: {processedIp}</h3>}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default IpValidation
