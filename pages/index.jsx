import React from 'react';
import Paths from 'antwar-core/PathsMixin';
import {Link} from 'react-router';
import MomentDisplay from 'antwar-rikki-theme/MomentDisplay';

export default React.createClass({
  mixins: [Paths],
  render: function() {
    const articles = require('../data/medium-@ad_harmonium.json');
    const works = this.getSectionItems('work');
    return (
      <div className="grid">
          <h1>Hi I'm Rikki I like to write Javascript</h1>
          <h2>Articles</h2>
          <ul className="post-grid reset">{_.map(articles, (page, i) => {
            if (i > 3){
              return;
            }
            return (
              <li key={`post-grid-item-${i}`}>
                <h3 className="post-grid__heading">
                  <a href={page.link} target="_blank">{page.title} </a>
                </h3>

                {page.published ?
                  <MomentDisplay className="post__moment" datetime={page.published} /> :
                  null
                }
                <div className="post-grid__preview" dangerouslySetInnerHTML={{__html: page.content}} />
              </li>
            );
          })}</ul>
          <h2>Work</h2>
          <ul className="post-grid reset">{_.map(works, (page, i) => {
            if (i > 3){
              return;
            }
            return (
              <li key={`post-grid-item-${i}`}>
                <h3 className="post-grid__heading">
                  <Link to={'/' + page.url}>{page.title}</Link>
                </h3>

                <div className="post-grid__preview" dangerouslySetInnerHTML={{__html: page.preview}} />
              </li>
            );
          })}</ul>
      </div>
    );
  }
})
