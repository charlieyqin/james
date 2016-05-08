export const SET_REQUEST_FILTER = 'SET_REQUEST_FILTER';
export const SET_ACTIVE_REQUEST = 'SET_ACTIVE_REQUEST';
export const SET_CONTEXT_REQUEST = 'SET_CONTEXT_REQUEST';
export const SYNC_REQUESTS = 'SYNC_REQUESTS';

export function setRequestFilter(filter = '') {
  return {
    type: SET_REQUEST_FILTER,
    filter
  };
}

export function setActiveRequest(requestId = null) {
  return {
    type: SET_ACTIVE_REQUEST,
    requestId
  };
}

export function setContextRequest(requestId = null) {
  return {
    type: SET_CONTEXT_REQUEST,
    requestId
  };
}

export function syncRequests(requests) {
  return {
    type: SYNC_REQUESTS,
    requests
  };
}
