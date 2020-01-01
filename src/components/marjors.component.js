import React, { Component } from 'react';
import axios from 'axios';

export default class Majors extends Component {
  constructor(props){
    super(props);

    // this.buildList = this.buildList.bind(this);

    this.state = {
      majors: [],
      subjects: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/majors').then(res =>{
      if(res.data.length > 0){
        this.setState({majors: res.data});
        console.log(this.state.majors);
      }
    }).catch(err => console.log(err));

    axios.get('http://localhost:5000/subjects').then(res =>{
      if(res.data.length > 0){
        this.setState({subjects: res.data});
        console.log(this.state.subjects);
      }
    }).catch(err => console.log(err));
  }

  // buildList(){
  //   return this.state.majors.map(major => {
  //     return <li><h3>{major.name}</h3></li>
  //   });
  // }

  render() {
    return (
      <div className='text-left'>
        <h1>EST Essaouira Majors and Subjects:</h1>
        <br/>
        <br/>
        <ul>
          {this.state.majors.map((major, i) => 
            <li key={i}>
              <h2>{major.name}</h2>
              <ul>
                {this.state.subjects.filter(subject => major.subjects.includes(subject._id)).map((subject, i) =>
                  <li key={i}>
                    <h3>{subject.name}</h3>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
