export const GET_COVID_DATA = "GET_COVID_DATA";
export const GET_COVID_DATA_SUCCESS = "GET_COVID_DATA_SUCCESS";
export const GET_COVID_DATA_FAILED = "GET_COVID_DATA_FAILED";

interface dataInterface {
  name: string;
  confirmed?: string;
  active?: string;
  recovered?: string;
  deceased?: string;
}

export interface statesData {
  [stateCode: string]: {
    total?: dataInterface;
    districts?: {
      [cityName: string]: {
        total?: dataInterface;
      };
    };
  };
}

interface loadingInterface {
  type: typeof GET_COVID_DATA;
}

interface suceessInterface {
  type: typeof GET_COVID_DATA_SUCCESS;
  payload: {
    data: statesData
  };
}

interface failedInterface {
  type: typeof GET_COVID_DATA_FAILED;
  payload: {
    data: any;
  };
}

export type actionTypesDispatchType =
  | suceessInterface
  | loadingInterface
  | failedInterface;
