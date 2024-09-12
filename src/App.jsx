import { Button, FormControl, Link, MenuItem, Select, TextField } from '@mui/material'
import './App.css'

function App() {
  const languages = [
    'English (United States)',
    'English (United Kingdom)',
    'French',
    'Spanish',
    'Portuguese',
    'Chinese',
    'Japanese',
    'Russian',
    'Korean',
    'Indonesia'
  ]

  return (
    <div className="canvas">
      <div className="container">
        <div className="header">
          <img src="src\assets\g-logo.png" alt="google logo" />
        </div>
        <div className="body">
          <div className="bodyLeft">
            <h1>Sign in</h1>
            <p>Use your Google Account</p>
          </div>
          <div className="bodyRight">
            <div className="formLogin">
              {/* <input type="text" placeholder="Email or phone"/>
              <a href="#">Forgot email?</a> */}
              <TextField
                label="Email or phone"
              />
              <Link href="#" underline='none'>Forgot email?</Link>
            </div>
            <div className="descLogin">
              <p>Not your computer? Use a Private Window to sign in. <span><Link href="#" underline='none'>Learn more about using Guest mode</Link></span></p>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className="footerLeft">

          </div>
          <div className="footerRight">
            <Link href="#" underline='none'>Create account</Link>
            <Button variant="contained" sx={{ borderRadius: '30px', textTransform: 'none', height: '40px', width: '79px' }}>Next</Button>
          </div>
        </div>
      </div>
      <div className="navigation">
        <div className="navigationLeft">
          <select name="lang" id="">
            <option value="indonesia">Indonesia</option>
            <option value="english">English (United Kingdom)</option>
            <option value="english">English (United States)</option>
          </select>
          {/* <FormControl>
            <Select
              placeholder='language'
            >
              {languages.map((language) => (
                <MenuItem value={language}>{language}</MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </div>
        <div className="navigationRight">
          <Link href="#" underline='none'>Helps</Link>
          <Link href="#" underline='none'>Privacy</Link>
          <Link href="#" underline='none'>Terms</Link>
        </div>
      </div>
    </div>
  )
}

export default App
