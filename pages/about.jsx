import React from 'react';
import SkillsList from '../components/SkillsList';

export default class About extends React.Component {
  constructor(props, context){
    super(props, context);
    this.title = 'About';
    this.resume = require('../data/resume.coffee');
    console.log(this.resume);
  }
  render() {
    const { skills, jobhistory} = this.resume;
    return (
        <div className="grid">
          <h1>About Rikki!</h1>
          <h2>About</h2>
          <p>{this.resume.statement}</p>
          <aside>
            <h2>Skills</h2>
            <SkillsList
              style={styles.skillsList}
              list={skills.client}
              header={'Client/Browser'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.server}
              header={'Server'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.ops}
              header={'Dev/Sys Ops'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.tooling}
              header={'Tooling'}
            />
          </aside>
          <aside>
            <h2>Work History</h2>
            <SkillsList
              style={styles.skillsList}
              list={skills.client}
              header={'Client/Browser'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.server}
              header={'Server'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.ops}
              header={'Dev/Sys Ops'}
            />
            <SkillsList
              style={styles.skillsList}
              list={skills.tooling}
              header={'Tooling'}
            />
          </aside>
        </div>
    );
  }
}

const styles = {
  skillsList: {
    width: '33.33333%',
    margin: 0,
    display: 'block',
    float: 'left',
  }
}
