import { repoAction } from "../index";

import { FETCH_PUBLIC_REPOS, FETCH_NEWS_LIST, FETCH_SEARCH_NEWS, FETCH_NEWSPAPER } from '../../constants/api';

import { getCallApi } from '../../utils/utils';

/**
 *
 * @param {*} num
 */
export const loadRepoDataApi = (loadingType, skip) => {
  if (loadingType === 'firstLoad') {
    return (dispatch) => {
      dispatch(repoAction.load_repo_data());
      return getCallApi(FETCH_PUBLIC_REPOS).then((data) => {
        dispatch(repoAction.load_repo_data_success(data.slice(0, skip)));
        return Promise.resolve(data);
      }).catch((error) => {
        dispatch(repoAction.load_repo_data_error(error));
        return Promise.reject(error);
      })
    }
  }
  if (loadingType === 'lazyLoad') {
    return (dispatch) => {
      dispatch(repoAction.async_lazy_loading_activated());
      return getCallApi(FETCH_PUBLIC_REPOS).then((data) => {
        console.log("lazyload", data.slice(0, skip));
        dispatch(repoAction.async_lazy_loading_success(data.slice(0, skip)));
        return Promise.resolve(data.data);
      }).catch((error) => {
        dispatch(repoAction.async_lazy_loading_error(error));
        return Promise.reject(error);
      })
    }
  }
}

/**
 *
 * @param {*} num
 */
export const getNewsList = (tag) => {
  return (dispatch) => {
    dispatch(repoAction.load_repo_data());
    return getCallApi(FETCH_NEWS_LIST(tag)).then((data) => {
      dispatch(repoAction.load_repo_data_success(data));
      return Promise.resolve(data);
    }).catch((error) => {
      dispatch(repoAction.load_repo_data_error(error));
      return Promise.reject(error);
    })
  }
}
/**
 *
 * @param {*} num
 */
export const getNewspaper = (tag) => {
  return (dispatch) => {
    dispatch(repoAction.load_repo_data());
    return getCallApi(FETCH_NEWSPAPER(tag)).then((data) => {
      console.log(FETCH_NEWSPAPER(tag));
      dispatch(repoAction.load_repo_data_success(data));
      return Promise.resolve(data);
    }).catch((error) => {
      dispatch(repoAction.load_repo_data_error(error));
      return Promise.reject(error);
    })
  }
}
/**
 *
 * @param {*} searchString
 */
export const searchNewsApiCall = (searchString) => {
  return (dispatch) => {
    dispatch(repoAction.repo_search());
    return getCallApi(FETCH_SEARCH_NEWS(searchString)).then((data) => {
      dispatch(repoAction.repo_search_success(data));
      return Promise.resolve(data);
    }).catch((error) => {
      dispatch(repoAction.lrepo_search_error(error));
      return Promise.reject(error);
    })
  }
}