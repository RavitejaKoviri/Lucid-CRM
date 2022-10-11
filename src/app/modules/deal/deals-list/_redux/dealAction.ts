import * as requestFromServer from "./dealCrud";
import { ManageUserSlice, callTypes } from "./dealSlice";

const { actions } = ManageUserSlice;



//getAll user details
export const getAllUsers = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllUsers(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.getedAllUsersDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
