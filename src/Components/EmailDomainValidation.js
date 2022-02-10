import React, { useEffect, useState } from 'react';
import { emailDomainValidator, setConfig } from 'enigma-x-utilities';
import { Grid, TextField, Typography, Chip } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { StyledButton, useStyles } from '../Styles';

const EmailDomainValidation = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [doaminNameItem, setDoaminNameItem] = useState('');
  const [domainsList, setDomainsList] = useState([]);
  // const domainsList = [];
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(undefined);

  const testEmail = () => {
    setConfig('emailDomainValidator', {
      domainList: domainsList,
    });
    const response = emailDomainValidator(email);
    if (response.success) {
      setMessage(response.message);
      setSuccess(response.success);
    } else {
      setMessage(response.message);
      setSuccess(response.success);
    }
  };

  const updateDomainList = () => {
    setDomainsList((prev) => [...prev, doaminNameItem]);
    setDoaminNameItem('');
  };
  useEffect(() => {}, [email]);

  return (
     <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9', marginTop: 10 }}>
            <Grid container alignItems="center" justifyContent="space-evenly" style={{ paddingBlock: '10px' }}>
                <Grid item xs={2} className={classes.blueShape} />
                <Grid item xs={12} style={{ marginBottom: 20 }}>
                    <Typography style={{ textAlign: 'center', fontSize: 18 }}> Email validator</Typography>
                </Grid>
        <Grid container justifyContent="space-between" style={{ width: '85%' }}>
          <Grid item xs={5}>
            <TextField
              id="outlined-basic"
              label="Enter domains list"
              variant="outlined"
              style={{ width: '150%' }}
              onChange={(e) => {
                setDoaminNameItem(e.target.value);
              }}
              value={doaminNameItem}
            />
          </Grid>
          <Grid item xs={5}>
            <StyledButton onClick={(e) => updateDomainList(e)}>update domain list</StyledButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={11} style={{ height: 60, textAlign: 'center' }}>
        {domainsList.length ? (
          <Grid container className={classes.chipContainer}>
            {domainsList.map((item) => (
              <Grid item key={item} className={classes.chipItem}>
                <Chip variant="outlined" label={`@${item}`} className={classes.chip} />
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Grid>

      <Grid item xs={8} style={{ height: 60 }}>
        {success == true ? <Alert severity="success">{message}</Alert> : success == false && <Alert severity="error">{message}</Alert>}
      </Grid>
      <Grid
        container
        alignItems="center"
        direction="column"
        // justifyContent="space-evenly"
        style={{ paddingBlock: '10px' }}
      >
        <Grid item xs={2} className={classes.blueShape} />

        <Grid container justifyContent="space-between" style={{ width: '85%' }}>
          <Grid item xs={5}>
            <TextField
              id="outlined-basic"
              label="Enter email address"
              variant="outlined"
              style={{ width: '150%' }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <StyledButton onClick={(e) => testEmail(e)}>Check email address</StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default EmailDomainValidation;
