export const tryHandle = (actionType: any) => ({
  type: actionType,
  payload: { loading: true },
});

export const handleResponse = (actionType: any, data: any) => ({
  type: actionType,
  payload: { data },
});

export const handleError = (actionType: any, error: any) => ({
  type: actionType,
  payload: { data: error },
});
