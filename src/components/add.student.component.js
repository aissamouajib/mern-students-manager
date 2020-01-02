import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeMajor = this.onChangeMajor.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeBirthday = this.onChangeBirthday.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      major: '',
      name: '',
      email: '',
      phone: '',
      birthday: new Date(),
      majors: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/majors/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            majors: response.data.map(major => major.name),
            major: response.data[0].major,
            majorsobject: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeMajor(e) {
    this.setState({
      major: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  onChangeBirthday(date) {
    this.setState({
      birthday: date
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const m = this.state.majorsobject.filter(major => major.name === this.state.major);
    const student = {
      major: m[0]._id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      birthday: this.state.birthday,
    }

    console.log(student);

    axios.post('http://localhost:5000/students/add', student)
      .then(res => console.log(res.data));

    window.location = '/students';
  }

  render() {
    return (
    <div className='text-left'>
      <h1>Add New Student:</h1>
      <form onSubmit={this.onSubmit}>
        <div className="form-row"> 
          <label>Major: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.major}
              onChange={this.onChangeMajor}>
              {
                this.state.majors.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Phone: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <label>Birthday: </label>
          <div>
            <DatePicker
              selected={this.state.birthday}
              onChange={this.onChangeBirthday}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Add New User" className="btn btn-lg btn-dark" />
        </div>
      </form>
    </div>
    )
  }
}