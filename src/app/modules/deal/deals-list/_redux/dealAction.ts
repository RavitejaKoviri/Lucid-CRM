import * as requestFromServer from "./dealCrud";
import { dealsSlice, callTypes } from "./dealSlice";

const { actions } = dealsSlice;



//getAll user details
export const getAlldeals = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAlldeal(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedalldeals({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });

};
export const getdealsById = (id: any, token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getdealsById(id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetcheddealsById({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });

};
//get source details
export const getsource = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getSource(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllSourceDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const getcampaigns = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getcampaigns(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedcampaignsDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getcompanies = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllcompanies(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllComapniesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getdealStatuses = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getdealStatuses(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllleadStatusesDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";;
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};


export const CreateDeal = (data: any, token: any) => (dispatch: any) =>
  requestFromServer
    .CreateDeal(data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetcheddeal({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const UpdateDeal = (data: any, id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .UpdateDeal(data, id, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.Updateddeal({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });

export const DeleteDeal = (id: any, token: any) => (dispatch: any) =>
  requestFromServer
    .DeleteDeal(id, token)
    .then((response) => {
      const { data } = response;
      console.log(data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });