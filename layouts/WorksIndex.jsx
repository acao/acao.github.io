import React from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import ProjectList from '../components/ProjectList';

export default class WorksIndex extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      projects: []
    }
    // this.getProjects = this.getProjects.bind(this);
    // this.getProjects();
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
    const projects = this.state.projects;

    return (
      <div className='post'>
        <h1 className='post__heading'>Projects</h1>
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }
}
