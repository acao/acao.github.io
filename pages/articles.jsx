import React from 'react';
import _ from 'lodash';
import {Link} from 'react-router';
import MomentDisplay from 'antwar-rikki-theme/MomentDisplay';

export default class ArticlesIndex extends React.Component{

  constructor(props){
    super(props);
    this.articles = require('../data/medium-@ad_harmonium.json');
    this.displayName = 'Articles';
  }
  render() {

    return (
      <div className="grid">
        <h1>Articles</h1>

        <ul className="post-list">{_.map(this.articles, (page, i) => {
          return (
            <li key={`post-list-item-${i}`}>
              <h3 className="post-list__heading">
                <a href={page.link} target="_blank">{page.title}</a>

                {page.isDraft ?
                  <span className="draft-text">Draft</span> :
                  null
                }
              </h3>

              {page.published ?
                <MomentDisplay className="post__moment" datetime={page.published} /> :
                null
              }
              <div className="post-list__preview" dangerouslySetInnerHTML={{__html: page.content}} />
            </li>
          );
        })}</ul>
      </div>
    );
  }
};
