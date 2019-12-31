import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        {/* <h1>Welcome {this.props.user.username}, your email is : {this.props.user.email}</h1> */}
        <h1>Welcome back, Aissam.</h1>
        <br/>
        <br/>
        <div className='container'>
            <Grid container direction={'row'}>
                <Container component="main" maxWidth="xs">
                    <form  noValidate>
                      <fieldset>
                        <legend><h2>Edit Your Info</h2></legend>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        label={this.props.user.email}
                        autoComplete="email"
                        disabled={true}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label={this.props.user.username}
                        autoComplete="username"
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Current Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: 40, paddingTop: 12}} 
                        >
                          <h4>Edit Your Info</h4>
                        </Button>
                      </fieldset>
                    </form>
                </Container>
                <Container component="main" maxWidth="xs">
                    <form  noValidate>
                      <fieldset>
                        <legend><h2>Add New Admin</h2></legend>
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="User Name"
                        autoComplete="username"
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Repeat Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: 40, paddingTop: 12}} 
                        >
                            <h4>Add New Admin</h4>
                        </Button>
                      </fieldset>
                    </form>
                </Container>
            </Grid>
            </div>
      </div>
    );
  }
}
