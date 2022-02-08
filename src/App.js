import { Grid } from '@material-ui/core';
import './App.css';
import Password from './Components/Password';

function App() {
  return (
    <div>
      <Grid container style={{ display: 'flex' }}>
        <Password />
      </Grid>
    </div>
  );
}

export default App;
