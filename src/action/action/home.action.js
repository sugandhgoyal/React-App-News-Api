import {
  LOAD_REPO_DATA,
  LOAD_REPO_DATA_SUCCESS,
  LOAD_REPO_DATA_ERROR,
  LAZY_LOADER_ACTIVATED,
  LAZY_LOADER_ERROR,
  LAZY_LOADER_SUCCESS,
} from '../../constants/index';

const load_repo_data = () => ({ type: LOAD_REPO_DATA });

const load_repo_data_success = (data) => ({ type: LOAD_REPO_DATA_SUCCESS, repo_data: data })

const load_repo_data_error = (err) => ({ type: LOAD_REPO_DATA_ERROR, err })

const async_lazy_loading_activated = () => {
  return { type: LAZY_LOADER_ACTIVATED }
}

const async_lazy_loading_success = (data) => {
  return {
    type: LAZY_LOADER_SUCCESS,
    more_data: data,
  }
}

const async_lazy_loading_error = (error) => {
  return { type: LAZY_LOADER_ERROR, error }
};

export default {
  load_repo_data,
  load_repo_data_error,
  load_repo_data_success,
  async_lazy_loading_activated,
  async_lazy_loading_error,
  async_lazy_loading_success
}