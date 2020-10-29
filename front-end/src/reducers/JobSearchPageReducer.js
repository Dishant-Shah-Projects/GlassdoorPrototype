import { updateJobFilterStore, updateJobListStore } from '../constants/action-types';

const defaultState = {
  jobListStore: {
    jobList: [],
    PageNo: 0,
    PageCount: 5,
    Totalcount: 10,
    Sort: 'MostRecent',
    JobType: '',
    State: '',
    SalStart: '',
    SalEnd: '',
  },
  jobFilterStore: {
    fiterSlected: '',
  },
};

const JobSearchPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case updateJobListStore: {
      return {
        ...state,
        jobListStore: { ...state.jobListStore, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }
    case updateJobFilterStore: {
      return {
        ...state,
        jobFilterStore: { ...state.jobFilterStore, ...action.payload },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default JobSearchPageReducer;
