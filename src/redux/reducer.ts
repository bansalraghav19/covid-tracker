import * as Types from "./actionTypes";

interface State {
  data: Types.statesData;
  error: boolean;
  isLoading: boolean;
}

const initialState: State = {
  data: {},
  error: false,
  isLoading: false,
};

const fetchCovidData = (
  state: State = initialState,
  action: Types.actionTypesDispatchType
): State => {
  switch (action.type) {
    case Types.GET_COVID_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_COVID_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        error: false,
      };
    case Types.GET_COVID_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default fetchCovidData;
