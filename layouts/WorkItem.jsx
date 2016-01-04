import React from 'react';
import { Link } from 'react-router';

export default class WorkItem extends React.Component {
  constructor(props){
    super(props);
    this.displayName = 'WorkItem';
  }
  render() {
    const { section, page } = this.props;
    console.log(this.props);
    
    return (
      <div className='post'>
        <h1 className='post__heading'>Projects</h1>
      </div>
    );
  }
}
