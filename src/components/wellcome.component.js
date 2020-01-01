import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import axios from 'axios';

export default class Welcome extends Component {
  constructor(props){
    super(props);

    this.updateInfo = this.updateInfo.bind(this);

    this.state = {
      user: this.props.user,
      email: this.props.user.email,
      username: '',
      currentpassword: '',
      newpassword: '',  
    }
  }


  updateInfo(e){
    e.preventDefault();
    if(this.state.user.password === this.state.currentpassword){
      const user = {
        email: this.state.email,
        username: this.state.username,
        password: this.state.newpassword,
      }
      // console.log(user);
      axios.post('http://localhost:5000/admins/update/'+this.state.user._id, user).then(res => {
        // console.log(res.data);
        this.props.onUpdateUser(user);
        // this.setState({
        //   user: user,
        //   username: '',
        //   currentpassword: '',
        //   newpassword: ''
        // });
      }).catch(err => console.log(err));
    } else alert('Incorrect password');
  }


  render() {
    return (
      <div>
        {/* <h1>Welcome {this.state.user.username}, your email is : {this.state.user.email}</h1> */}
        <h1>Welcome back, {this.state.user.username}.</h1>
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
                        label={this.state.user.email}
                        autoComplete="email"
                        disabled={true}
                        />
                        {/* <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange= {(e) =>{
                          console.log(e.target.value);
                        }}
                        /> */}
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label='User Name'
                        autoComplete="username"
                        id='username'
                        name='username'
                        onChange= {(e) => {
                          this.setState({
                            username: e.target.value,
                          });
                        }}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Current Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => this.setState({
                          currentpassword: e.target.value,
                        })}
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => this.setState({
                          newpassword: e.target.value,
                        })}
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: 40, paddingTop: 12}} 
                        onClick={this.updateInfo}
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
