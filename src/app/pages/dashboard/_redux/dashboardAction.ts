import * as requestFromServer from "./dashboardCrud";
import { DashboardSlice, callTypes } from "./dashboardSlice";

const { actions } = DashboardSlice;

//getAll user details
export const getAllBookings = () => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllBookings()
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllBooking({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllTasks = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllTasks(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllTasks({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllDeals = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllDeals(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllDeals({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllContacts =
  (token: any, companyId: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .fetchAllContacts(token, companyId)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedAllContacts({ data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find patient test reports";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };
export const getAllCampaigns = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllCampaigns(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllCampaigns({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
export const getAllLeads = (token: any, companyId: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .fetchAllLeads(token, companyId)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedAllLeads({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getCdrs = (token: any) => (dispatch: any) => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getAllCdrs(token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.fetchedCDRSDetails({ data }));
    })
    .catch((error) => {
      error.clientMessage = "Can't find patient test reports";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const getAllTickets =
  (token: any, companyId: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getAllTickets(token, companyId)
      .then((response) => {
        const { data } = response;
        dispatch(actions.getedAllTicketsDetails({ data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find patient test reports";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };
export const fetchRolePermissionsByUserId =
  (id: any, token: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getRolePermissionsById(id, token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedRolePermissionsById({ data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find Role permissions By Id";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };
export const ChangeUser = (id:any, data: any, token: any) => (dispatch: any) => {
  return requestFromServer
    .ChangeUser(id,data, token)
    .then((response) => {
      const { data } = response;
      dispatch(actions.changedUser({ data }));
    })
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.clientMessage = "Can't find";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
  };
  export const getUsersById = (id: any, token: any) => (dispatch: any) => {
    dispatch(actions.startCall({ callType: callTypes.action }));
    return requestFromServer
      .getUsers(id, token)
      .then((response) => {
        const { data } = response;
        dispatch(actions.fetchedAllUsers({ data }));
      })
      .catch((error) => {
        error.clientMessage = "Can't find patient test reports";
        dispatch(actions.catchError({ error, callType: callTypes.action }));
      });
  };