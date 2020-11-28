import { updateEmployerStatsStore } from '../constants/action-types';

const defaultState = {
  reportStore: {
    statsList: [],
    PageNo: 0,
    PageCount: 5,
    Totalcount: 10,    
  },  
};

const EmployerReportStatsReducer = (state = defaultState, action) => {  
  switch (action.type) {
    case updateEmployerStatsStore: {     
      return {       
        ...state,
        reportStore: { ...state.reportStore, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }   

    default: {
      return { ...state };
    }
  }
};

export default EmployerReportStatsReducer;
