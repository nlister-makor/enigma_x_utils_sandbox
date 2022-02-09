import {
  Grid,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { setConfig, numberFormatter } from "enigma-x-utilities";
import { StyledButton, useStyles } from "../Styles";
function NumberFormatter() {
  const classes = useStyles();
  const [overall, setOverall] = useState("");
  const [decimal, setDecimal] = useState("");
  const [number, setNumber] = useState("");
  const [fNumber, setFnumber] = useState("");
  const [useColors, setUseColors] = useState(false);
  const [color, setColor] = useState(null);
  const [positive, setPositive] = useState("blue");
  const [negative, setNegative] = useState("red");

  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    switch (name) {
      case "number":
        setNumber(+value);
        break;
      case "overall":
        setOverall(+value);
        break;
      case "decimal":
        setDecimal(+value);
        break;
      case "colors":
        if (value === "false") {
          //return state colors values to initial values
          setColor(null);
          setPositive("#111111");
          setNegative("#111111");
          //configure the util the use no colors
          setConfig("numberFormatter", {
            useColors: false,
          });
        }
        setUseColors(value === "true" ? true : false);
        break;
      case "positive":
        setPositive(value);
        break;
      case "negative":
        setNegative(value);
        break;
    }
  };

  const handleFormat = (e) => {
    e.preventDefault();
    if (number && overall && decimal) {
      const configData = {
        overallDigitLimit: overall,
        decimalDigitLimit: decimal,
        useColors,
      };
      if (useColors)
        configData.colors = {
          positive,
          negative,
        };
      setConfig("numberFormatter", configData);
      const { data } = numberFormatter(number);
      if (data) {
        setFnumber(data.number);
        if (data.color) setColor(data.color);
      }
    } else alert("All fields are required!");
  };

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
        style={{ paddingBlock: 10 }}
      >
        <Grid item xs={2} className={classes.blueShape} />
        <Grid item xs={12}>
          <Typography style={{ textAlign: "center", fontSize: 18 }}>
            Number formatter
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid container justifyContent="center">
            <Grid item xs={12} style={{ paddingTop: 10 }}>
              <TextField
                label="number"
                variant="outlined"
                onChange={handleChange}
                id="number"
                name="number"
              />
            </Grid>

            <Grid item xs={12} style={{ paddingTop: 10 }}>
              <TextField
                onChange={handleChange}
                id="overall"
                label="Overall digits limit"
                name="overall"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 10 }}>
              <TextField
                onChange={handleChange}
                id="decimal"
                label="Decimal digits limit"
                name="decimal"
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ paddingBlock: 10 }}>
              <Typography  style={{fontSize:12}}>
                Use Colors?
              </Typography>
              <Select
                native
                variant="outlined"
                value={useColors}
                onChange={handleChange}
                name="colors"
                id="colors"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Select>
            </Grid>

            {useColors ? (
              <Grid item xs={12} style={{ paddingBottom: 10}}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography>Positive</Typography>
                    <TextField
                      style={{ width: 60 }}
                      variant="outlined"
                      type="color"
                      onChange={handleChange}
                      name="positive"
                      value={positive}
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Negative</Typography>
                    <TextField
                      style={{ width: 60 }}
                      variant="outlined"
                      type="color"
                      onChange={handleChange}
                      name="negative"
                      value={negative}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
            <Grid item xs={12} style={{paddingBlock: 10 }}>
              <StyledButton style={{ margin: 0 }} onClick={handleFormat}>
                Format
              </StyledButton>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>Result:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography style={{ color }}>
                    {fNumber ? fNumber : ""}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NumberFormatter;
