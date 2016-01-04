import React from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';
import ProjectList from '../components/ProjectList';

export default class OpenSource extends React.Component {
  constructor(props, context){
    super(props, context);
    this.items = require('../data/projects.json').items;
  }
  render() {
    return (
      <div className="grid">
          <h1>Open Source Projects</h1>
          <ProjectList projects={this.items} />
      </div>
    );
  }
}
