'use strict';

var prevnextPlugin = require('antwar-prevnext-plugin');
var highlightPlugin = require('antwar-highlight-plugin');
var rssPlugin = require('antwar-rss-plugin');
var themeConfig = require('antwar-rikki-theme');

module.exports = {
  output: 'build',
  title: 'Rschulte.com',
  name: 'Rschulte.com',
  description: 'Stuff',
  author: {
    name: 'Rikki Schulte',
    email: 'richard.j.schulte@gmail.com'
  },
  deploy: {
    branch: 'master',
  },
  assets: [
    {
      from: 'assets',
      to: 'assets',
    },
    {
      from: './CNAME',
      to: './',
    }
  ],
  // plugins: [
  //   rssPlugin({
  //     baseUrl: '<your url here>',
  //     sections: ['blog']
  //   }),
  // ],
  plugins: [
    rssPlugin({
        baseUrl: 'http://antwarjs.github.io',
        sections: ['articles']
      }),
    prevnextPlugin(),
    highlightPlugin({
      style: function() {
        require('highlight.js/styles/github.css');
      },
      languages: ['javascript'],
    })
  ],
  theme: {
    name: "antwar-rikki-theme",
    navigation: [
      {name: 'Home', title: 'Home', url: '/', description: 'stuff'},
      {name: 'Work', title: 'Work', url: '/work'},
      {name: 'Open Source', title: 'Open Source', url: '/opensource'},
      {name: 'Articles', title: 'Articles', url: '/articles'},
      {name: 'About', title: 'About', url: '/about'},
    ],
    //logo: function(){ return require('./logo.svg')},
    //analyticsId: 'UA-71919566-1',
    customStyles: 'specific.scss'
  },
  paths: {
    '/': {
      name: 'Home',
      title: 'Home',
      path: function() {
        return require.context('./pages');
      },
    },
    // articles: {
    //   name: 'Home',
    //   title: 'Articles',
    //   layout: 'BlogPage',
    //
    //   path: function() {
    //     return require.context('./posts', true, /^\.\/.*\.md$/);
    //   },
    //   draft: function() {
    //     return require.context('./drafts', true, /^\.\/.*\.md$/);
    //   },
    // },
    work: {
      name: 'Home',
      title: 'Work',
      layouts: {
        page: function() {
          return require('./layouts/WorkItem.jsx');
        },
      },
      path: function() {
        return require.context('./projects', true, /^\.\/.*\.md$/);
      },
    },
  },
};
