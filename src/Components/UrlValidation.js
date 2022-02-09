import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { URLValidator } from 'enigma-x-utilities'

import { useEffect, useState } from 'react'

function UrlValidation() {
  const [URL, setURL] = useState('')
  const [processedURL, setProcessedURL] = useState(undefined)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(undefined)
  const CheckURL = () => {
    const URLResponse = URLValidator(URL)
    if (URLResponse.success) {
      setMessage(URLResponse.message)
      setProcessedURL(URLResponse.data)
      setSuccess(URLResponse.success)
    } else {
      setMessage(URLResponse.message)
      setSuccess(URLResponse.success)
    }
  }
  useEffect(() => {}, [URL])

  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, borderRadius: 8, border: '1px solid black' }}>
      <Grid container alignItems='center' justifyContent='space-evenly'>
        <Grid item xs={12}>
          <Typography style={{textAlign: 'center', fontSize : 18}}>URL Validator</Typography>
        </Grid>
        <Grid item xs={8} style={{height: 60}}>
          {success == true ? <Alert severity='success'>{message}</Alert> : success == false && <Alert severity='error'>{message}</Alert>}
          {processedURL && <h3> URL: {processedURL}</h3>}
        </Grid>
        <Grid item xs={5}>
          <TextField
            id='outlined-basic'
            label='Enter URL'
            variant='outlined'
            style={{ width: '150%' }}
            onChange={(e) => {
              setURL(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Button style={{ marginLeft: '50%' }} size='large' onClick={(e) => CheckURL(e)}>
            Check URL
          </Button>
          <Grid container></Grid>
        </Grid>
        <Grid item xs={11} style={{ paddingTop: 30 }}></Grid>
      </Grid>
    </Grid>
  )
}

export default UrlValidation
