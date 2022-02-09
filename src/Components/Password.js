import { Grid, TextField, Typography } from '@material-ui/core';
import { passwordValidation , setConfig } from 'enigma-x-utilities'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect, useState } from 'react';
import { useStyles } from '../Styles';

const headers = ['Char. length', 'Upper Case', 'Lower Case' ,'Number' , 'NonAlphaNumeric'];

function Password() { 
  const classes = useStyles()
  const [validState, setValidState] = useState({validation : [{},{},{},{},{}] , });
  const [pwd, setPwd] = useState('');

  const valid = (e) => {
    setPwd(e.target.value);
    setConfig('password', { characterLen: 12, upperCase: 1, lowerCase: 1, num: 1, symbol: '!@#^' });
    setValidState(passwordValidation(e.target.value));
  };
  useEffect(() => {}, [validState]);

  return (
    <Grid item xs={12} lg={3} style={{ borderRadius: 8, border: '2px solid #2980b9', marginTop: 10 }}>
      <Grid container alignItems="center" justifyContent="space-evenly" style={{ paddingBlock: 10 }}>
        <Grid item xs={2} className={classes.blueShape} />

        <Grid item xs={12}>
          <Typography style={{ textAlign: 'center', fontSize: 18 }}>Password validation</Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{ width: '100%' }} onChange={(e) => valid(e)} />
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={11}>
              <Grid container direction="column">
                {validState &&
                  validState.validation.map((item, idx) => {
                    return (
                      <Grid item xs={12} key={idx}>
                        <Grid container>
                          <Grid item>{item.valid ? <DoneIcon style={{ color: '#1C67FF' }} /> : <CloseIcon style={{ color: '#FF3939' }} />}</Grid>
                          <Grid item>
                            <Typography>{headers[idx]}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} style={{ paddingTop: 20 }}>
          <Grid container>
            <Grid item xs={12}>
              <div style={{ backgroundColor: '#bababa', width: '100%', borderRadius: '8px', height: '10px' }}>
                {validState && validState.strength && validState.validation.every((item) => item.valid === true) && (
                  <div
                    style={{
                      height: '10px',
                      width: pwd === '' ? '0%' : validState.strength === 'Weak' ? '20%' : validState.strength === 'Strong' ? '50%' : validState.strength === 'Very strong' ? '100%' : null,
                      backgroundColor: validState.strength === 'Weak' ? '#FF3939' : validState.strength === 'Strong' ? '#FF8800' : validState.strength === 'Very Strong' ? '#00CA80' : null,
                      borderRadius: 4,
                    }}
                  ></div>
                )}
              </div>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 10 }}>
              <Grid container>
                <Grid item xs={4}>
                  <Typography style={{ textAlign: 'left' }}>Weak</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ textAlign: 'center' }}>Strong</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography style={{ textAlign: 'right' }}> Very Strong</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Password;

