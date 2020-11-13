import { showReplyModal, hideReplyModal } from '../constants/action-types';

const defaultState = {
  replyModalStore: {
    popSeen: false,
  },
};

const ReplyModalViewReducer = (state = defaultState, action) => {
  switch (action.type) {
    case showReplyModal: {
      return {
        ...state,
        replyModalStore: { ...state.replyModalStore, popSeen: true },
        //   return Object.assign(state, action.payload);
      };
    }
    case hideReplyModal: {
      return {
        ...state,
        replyModalStore: { ...state.replyModalStore, popSeen: false },
        //   return Object.assign(state, action.payload);
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default ReplyModalViewReducer;
