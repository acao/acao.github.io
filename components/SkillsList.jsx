import React from 'react';

export default class SkillsList extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
      <h3>{this.props.header || 'Header Missing'}</h3>
      <ul className={'reset'} style={styles.list}>
        {this.props.list.map((skill, i) =>{
          return (<li style={styles.listItem} className={`skill-item-${i}`}>{skill}</li>)
        })}
      </ul>
      </div>
    );
  }
}

const styles = {
  listItem: {
    marginBottom: 10,
    listStyleType: 'none',
  },
  list: {
    listStyleType: 'none',
  },
}
