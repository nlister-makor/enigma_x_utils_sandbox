import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { setConfig, numberFormatter } from "enigma-x-utilities";
import { StyledButton, useStyles } from "../Styles";
function NumberFormatter() {
  const classes = useStyles();
  const [overall, setOverall] = useState(null);
  const [decimal, setDecimal] = useState(null);
  const [number, setNumber] = useState(null);
  const [fNumber, setFnumber] = useState(null);
  const [useColors, setUseColors] = useState(false);
  const [color, setColor] = useState(null);
  const [positive, setPositive] = useState("#111111");
  const [negative, setNegative] = useState("#111111");

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
            <Grid container>
            <form onSubmit={handleFormat}>
          <Grid item xs={5}>
            <TextField
              label="number"
              variant="outlined"
              onChange={handleChange}
              id="number"
              name="number"
            />
          </Grid>

          <Grid item>
            <TextField
              onChange={handleChange}
              id="overall"
              label="Overall digits limit"
              name="overall"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={handleChange}
              id="decimal"
              label="Decimal digits limit"
              name="decimal"
              type="text"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <FormControl variant="outlined">
              <Select
                native
                value={useColors}
                onChange={handleChange}
                name="colors"
                inputProps={{
                  name: "colors",
                  id: "colors",
                }}
              >
                <InputLabel htmlFor="outlined-age-native-simple">
                  Use colors?
                </InputLabel>
                <option aria-label="None" value="" />
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Select>
            </FormControl>
          </Grid>

          {useColors ? (
            <Grid item>
              <Typography>Positive Negative</Typography>
              <TextField
                variant="outlined"
                type="color"
                onChange={handleChange}
                name="positive"
                value={positive}
              />
              <TextField
                variant="outlined"
                type="color"
                onChange={handleChange}
                name="negative"
                value={negative}
              />
            </Grid>
          ) : (
            ""
          )}
          <Grid item>
            <StyledButton>Format</StyledButton>
          </Grid>
        </form>
        <Grid item className="result">
          <Typography>
            {" "}
            Result: <span style={{ color }}>{fNumber ? fNumber : ""}</span>
          </Typography>
        </Grid>
            </Grid>
        </Grid>
        
      </Grid>
    </Grid>
  );
}

export default NumberFormatter;
