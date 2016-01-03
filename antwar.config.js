'use strict';

var prevnextPlugin = require('antwar-prevnext-plugin');
var highlightPlugin = require('antwar-highlight-plugin');


module.exports = {
  output: 'build',
  name: 'Antwar Boilerplate',
  author: {
    name: 'Dr A N Twar',
    email: 'antwar@antwar.com'
  },
  deploy: {
    branch: 'master',
  },
  // plugins: [
  //   rssPlugin({
  //     baseUrl: '<your url here>',
  //     sections: ['blog']
  //   }),
  // ],
  plugins: [
    // rssPlugin(),
    // prevnextPlugin(),
    highlightPlugin({
      style: function() {
        require('highlight.js/styles/github.css');
      },
      languages: ['javascript'],
    })
  ],
  theme: {
    name: "antwar-default-theme",
    navigation: [
      {title: 'Home', url: '/'},
      {title: 'Projects', url: '/projects'},
      {title: 'Blog', url: '/blog'}
    ],
    //logo: function(){ return require('./logo.svg')},
    analyticsId: 'UA-XXXXXX-1',
    customStyles: 'specific.scss'
  },
  paths: {
    '/': {
      path: function() {
        return require.context('./pages');
      }
    },
    blog: {
      title: 'Blog posts',
      layout: 'BlogPage',
      path: function() {
        return require.context('./posts', true, /^\.\/.*\.md$/);
      },
      draft: function() {
        return require.context('./drafts', true, /^\.\/.*\.md$/);
      },
    }
  },
};
