export const tryHandle = (actionType) => ({
  type: actionType,
  payload: { loading: true },
});

export const handleResponse = (actionType, data) => ({
  type: actionType,
  payload: { data },
});

export const handleError = (actionType, error) => ({
  type: actionType,
  payload: { data: error },
});
