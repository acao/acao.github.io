import fetch from 'isomorphic-fetch'

export const REQUEST_REPOS = 'REQUEST_REPOS'
export const RECEIVE_REPOS = 'RECEIVE_REPOS'

function requestRepos(projects) {
  return {
    type: REQUEST_REPOS,
    projects
  }
}

function receivePosts(projects, json) {
  return {
    type: RECEIVE_REPOS,
    projects: projects,
    repos: json.data,
    receivedAt: Date.now()
  }
}

function fetchRepos(projects) {
  return dispatch => {
    dispatch(requestRepos(projects)
    return fetch(`http://api.github.com/users/acao/repos`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(projects, json)))
  }
}
