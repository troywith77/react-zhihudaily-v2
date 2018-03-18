const initialState = {
  title: ''
};

const document = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DOCUMENT_TITLE': {
      return {
        ...state,
        title: action.payload.title
      }
    }
    default: {
      return state;
    }
  }
}

export default document;