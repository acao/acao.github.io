import React from 'react';
import { Link } from 'react-router';

export default class Note extends React.Component {

  constructor(props, context){
    super(props, context);
  }
  render() {
    return (
      <ul className="post-list">{_.map(this.props.projects, (proj, i) => {
        const { name, url, description} = proj;
        return (
          <li key={`post-list-item-${i}`}>
            <h3 className="post-list__heading">
              <Link to={`/projects/${name}`}>{name}</Link>
            </h3>
            <p className="post-list__preview">{description}</p>
          </li>
        );
      })}</ul>
    );
  }
}
