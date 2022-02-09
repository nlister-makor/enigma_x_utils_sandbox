import React from 'react';
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { phoneNumberFormatter } from 'enigma-x-utilities'

import { useEffect, useState } from 'react'
const PhoneValidation = () => {
  const [phone, setPhone] = useState('')
  const [formattedPhone, setFormattedPhone] = useState(undefined)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(undefined)
  const CheckPhone = () => {
    const response = phoneNumberFormatter(phone)
    if (response.success) {
      setMessage(response.message)
      setFormattedPhone(response.data)
      setSuccess(response.success)
    } else {
      setMessage(response.message)
      setSuccess(response.success)
    }
  }
  useEffect(() => {}, [phone])
  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, borderRadius: 8, border: '1px solid black' }}>
      <Grid container alignItems='center' justifyContent='space-evenly'>
        <Grid item xs={12}>
          <Typography style={{textAlign: 'center', fontSize : 18}}>Phone Validator</Typography>
        </Grid>
        <Grid item xs={8} style={{ paddingBlock: '5%' }}>
          {success == true ? <Alert severity='success'>{message}</Alert> : success == false && <Alert severity='error'>{message}</Alert>}
          {formattedPhone && <h3> Phone: {formattedPhone}</h3>}
        </Grid>
        <Grid item xs={5}>
          <TextField
            id='outlined-basic'
            label='Enter Phone'
            variant='outlined'
            style={{ width: '150%' }}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Button style={{ marginLeft: '50%' }} size='large' onClick={(e) => CheckPhone(e)}>
            Check Phone
          </Button>
          <Grid container></Grid>
        </Grid>
        <Grid item xs={11} style={{ paddingTop: 30 }}></Grid>
      </Grid>
    </Grid>
  );
};

export default PhoneValidation;
