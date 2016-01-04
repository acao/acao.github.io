import React from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import ProjectList from '../components/ProjectList';

export default class OpenSource extends React.Component {
  constructor(props, context){
    super(props, context);
    this.items = require('../data/projects.json').items;
    console.log(props, context);
  }

  // getProjects() {
  //   fetch('http://api.github.com/users/acao/repos?type=owner')
  //     .then(function(response) {
  //         if (response.status >= 400) {
  //             throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //     })
  //     .then((projects) => {
  //         this.setState({projects});
  //     });
  // }
  render() {
    return (
      <div className='post'>
        <h1 className='post__heading'>Open Source Projects</h1>
        <p>Because I wouldn't be here if it weren't for the Open Source software movement</p>
        <ProjectList projects={this.items} />
      </div>
    );
  }
}
