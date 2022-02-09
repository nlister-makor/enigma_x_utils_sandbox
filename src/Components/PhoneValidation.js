import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { StyledButton, useStyles } from "../Styles";
import { phoneNumberFormatter, setConfig }from "enigma-x-utilities";

import { useEffect, useState } from "react";

function PhoneValidation() {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [formattedPhone, setFormattedPhone] = useState(undefined);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(undefined);
  const CheckPhone = () => {
    const response = phoneNumberFormatter(phone);
    if (response.success) {
      setMessage(response.message);
      setFormattedPhone(response.data);
      setSuccess(response.success);
    } else {
      setMessage(response.message);
      setSuccess(response.success);
    }
  };
  useEffect(() => {}, [phone]);
  return (
    <Grid
      item
      xs={12}
      lg={3}
      style={{ borderRadius: 8, border: "2px solid #2980b9", marginTop: 10 }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        style={{ paddingBlock: "10px" }}
      >
        <Grid item xs={2} className={classes.blueShape} />

        <Grid item xs={12}>
          <Typography style={{ textAlign: "center", fontSize: 18 }}>
            Phone Validator
          </Typography>
        </Grid>
        <Grid item xs={8} style={{ paddingBlock: "5%" }}>
          {success == true ? (
            <Alert severity="success">{message}</Alert>
          ) : (
            success == false && <Alert severity="error">{message}</Alert>
          )}
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-basic"
            label="Enter Phone"
            variant="outlined"
            style={{ width: "150%" }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <StyledButton onClick={(e) => CheckPhone(e)}>
            Check Phone
          </StyledButton>
          <Grid container></Grid>
        </Grid>
        <Grid item xs={11} style={{ height: 60, textAlign: "center" }}>
          {formattedPhone && <h3> Phone: {formattedPhone}</h3>}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PhoneValidation;
