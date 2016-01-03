'use strict';

var prevnextPlugin = require('antwar-prevnext-plugin');
var highlightPlugin = require('antwar-highlight-plugin');


module.exports = {
  output: 'build',
  name: 'Rschulte.com',
  author: {
    name: 'Rikki Schulte',
    email: 'richard.j.schulte@gmail.com'
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
      {title: 'Home', url: '/'},
      {title: 'Works', url: '/works'},
      {title: 'Blog', url: '/blog'},
      {title: 'About', url: '/about'},
      {title: 'Open Source', url: '/opensource'}
    ],
    //logo: function(){ return require('./logo.svg')},
    //analyticsId: 'UA-71919566-1',
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
    },
    works: {
      title: 'Works',
      // layouts:{
      //   index: function() {
      //    return themeConfig.layouts().WorksIndex;
      //  },
      //  page: function() {
      //    return themeConfig.layouts().DocsPage;
      //  }
      // },

      path: function() {
        return require.context('./projects', true, /^\.\/.*\.md$/);
      },
    },
  },
};
