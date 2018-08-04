import {
  LOAD_REPO_DATA,
  LOAD_REPO_DATA_SUCCESS,
  LOAD_REPO_DATA_ERROR,
  LAZY_LOADER_ACTIVATED,
  LAZY_LOADER_ERROR,
  LAZY_LOADER_SUCCESS
} from '../../constants/index';


var _ = {
  union: require('lodash/union')
};

const initialState = {
  state: {},
  repo_data: [],
  error: null
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REPO_DATA:
      return {
        ...state
      }
    case LOAD_REPO_DATA_SUCCESS:
      return {
        ...state,
        repo_data: action.repo_data,
        error: false
      }
    case LOAD_REPO_DATA_ERROR:
      return {
        ...state,
        error: true
      }
    case LAZY_LOADER_ACTIVATED:
      return {
        ...state,
        has_more_items: true
      }
    case LAZY_LOADER_SUCCESS:
      return {
        ...state,
        repo_data: _.union(state.repo_data, action.more_data),
        has_more_items: false,
        error: false
      }

    case LAZY_LOADER_ERROR:
      return {
        ...state,
        has_more_items: false,
        error: true
      }
    default:
      return {
        ...state
      }
  }
}