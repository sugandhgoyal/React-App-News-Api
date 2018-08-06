export const FETCH_PUBLIC_REPOS = 'https://api.github.com/repositories'

export const FETCH_PUBLIC_REPOS_STARS = (owner, reponame) => {
    return `https://api.github.com/repos/${owner}/${reponame}`;
}

export const FETCH_SEARCH_DATA = (searchString) => {
    return `https://api.github.com/search/repositories?q=${searchString}`;
}

export const FILTER_DATA = (filter) => {
    return `https://api.github.com/search/repositories?q=all+language:assembly&sort=${filter}&order=desc`;
}

export const FETCH_NEWS_LIST = (tag) => {
    return `http://newsapi.org/v2/sources?category=${tag}&apiKey=3ea6ffb936c14da986623e3228c3a60f`;
}
export const FETCH_SEARCH_NEWS = (searchString) => {
    return `https://newsapi.org/v2/everything?q=${searchString}&language=en&apiKey=3ea6ffb936c14da986623e3228c3a60f`;
}
export const FETCH_NEWSPAPER = (searchString) => {
    return `https://newsapi.org/v2/everything?sources=${searchString}&apiKey=3ea6ffb936c14da986623e3228c3a60f`;
}