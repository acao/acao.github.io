import React from 'react';
import Paths from 'antwar-core/PathsMixin';
import {Link} from 'react-router';
import MomentDisplay from 'antwar-rikki-theme/MomentDisplay';

export default React.createClass({
  mixins: [Paths],
  render: function() {
    const articles = this.getSectionItems('articles');

    return (
      <div className="grid">
        <h1>About Rikki!</h1>
          <ul className="post-list">{_.map(articles, (page, i) => {
            return (
              <li key={`post-list-item-${i}`}>
                <h3 className="post-list__heading">
                  <Link to={'/' + page.url}>{page.title}</Link>

                  {page.isDraft ?
                    <span className="draft-text">Draft</span> :
                    null
                  }
                </h3>

                {page.date ?
                  <MomentDisplay className="post__moment" datetime={page.date} /> :
                  null
                }

                <p className="post-list__preview">{page.preview}</p>
              </li>
            );
          })}</ul>
      </div>
    );
  }
})
