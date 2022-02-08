import { Button, Grid, TextField } from '@material-ui/core'
import { Alert } from '@mui/material'

import { URLValidator } from 'enigma-x-utilities'

import { useEffect, useState } from 'react'

function Home() {
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
    <Grid container style={{ height: '100vh', display: 'flex' }}>
      <Grid item xs={8} style={{ backgroundColor: '#ffff', height: '50vh', borderRadius: 8 }}>
        <Grid container alignItems='center' justifyContent='space-evenly' style={{ margin: '10% auto' }}>
          <Grid item xs={11} style={{ marginBottom: '5%' }}>
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
    </Grid>
  )
}

export default Home
