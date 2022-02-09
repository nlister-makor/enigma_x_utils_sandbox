import { Grid } from '@material-ui/core'
import './App.css'
import Password from './Components/Password'
import UrlValidation from './Components/UrlValidation'
import PhoneValidation from './Components/PhoneValidation'
function App() {
  return (
    <div>
      <Grid container style={{ display: 'flex' }} direction='column'>
        <Password />
        <UrlValidation />
        <PhoneValidation />
      </Grid>
    </div>
  )
}

export default App
