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
      <div className="grid">
          <h1>Open Source Projects</h1>
          <ProjectList projects={this.items} />
      </div>
    );
  }
}
