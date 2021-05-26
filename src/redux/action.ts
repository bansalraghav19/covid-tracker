import axios from "axios";
import * as actionTypes from "./actionTypes";
import { Dispatch } from "react";

export const fetchCovidData =
  () => async (dispatch: Dispatch<actionTypes.actionTypesDispatchType>) => {
    dispatch({
      type: actionTypes.GET_COVID_DATA,
    });
    try {
      const response = await axios.get(
        `https://api.covid19india.org/v4/min/data.min.json`
      );
      dispatch({
        type: actionTypes.GET_COVID_DATA_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_COVID_DATA_FAILED,
        payload: { data: error },
      });
    }
  };
