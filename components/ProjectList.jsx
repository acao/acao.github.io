import React from 'react';
// import { Link } from 'react-router';

export default class Note extends React.Component {

  constructor(props, context){
    super(props, context);
  }
  render() {
    // <Link to={`/projects/${name}`}>{name}</Link>
    return (
      <ul className="post-list">{_.map(this.props.projects, (proj, i) => {
        const { name, url, description} = proj;
        return (
          <li style={styles.listItem} key={`post-list-item-${i}`}>
            <h3 className="post-list__heading">{name}</h3>
            <p className="post-list__preview">{description}</p>
          </li>
        );
      })}</ul>
    );
  }
}

const styles = {
  listItem: {
    textAlign: 'center',
    width: '50%',
    margin: 0,
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '0px 24px 12px 0px',
  }
}
