import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialProductsState = {
  Tickets: [],
  UpdateTicket:[],
  ticketStatus:[],
  posttickets:[],
  assignedTo: [],
  ticketsById:[],
  customerTo:[],
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const TicketSlice = createSlice({
  name: "TicketSlice",
  initialState: initialProductsState,

  reducers: {
    catchError: (state: any, action: any) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state: any, action: any) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },

    getedAllUsersDetails: (state, action) => {
      const { data } = action.payload;
      state.Tickets = data;
    },
    UpdatedTickets: (state, action) => {
      const { data } = action.payload;
      state.UpdateTicket = data;
    },

    fetchedAllticketStatusesDetails: (state, action) => {
      const { data } = action.payload;
      state.ticketStatus = data;
    },

    postticket: (state, action) => {
      const { data } = action.payload;
      state.posttickets = data;
    },
    
    fetchedassignedToDetails: (state, action) => {
      const { data } = action.payload;
      state.assignedTo = data;
    },

    fetchedcustomerToDetails: (state, action) => {
      const { data } = action.payload;
      state.customerTo = data;
    },

    fetchedticketsById: (state, action) => {
      const { data } = action.payload;
      state.ticketsById = data;
    },
  },

  
});

