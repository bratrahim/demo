import fetchData from './fetchData.js';

//init state
export const initialState = {
    loading: false,
    overlayed: false,
    result: null
  }

//constants
const BUTTON_CLICKED = 'BUTTON_CLICKED';
const DATA_FETCHED = 'DATA_FETCHED';
const MODAL_CLOSED = 'MODAL_CLOSED';

//action creators
const showResult = data => ({
    type: DATA_FETCHED,
    payload: data
});

const showLoading = () => ({
    type: BUTTON_CLICKED
});

export const closeModal = data => ({
    type: MODAL_CLOSED
})

export const getData = text => dispatch => {
    dispatch(showLoading());
    fetchData(`/person/${text}`).then(
        ({val1, val2}) => Promise.all([
            fetchData(`/facility/${val1}`),
            fetchData(`/exposure/${val2}`),
        ]).then((arr) => {
            dispatch(showResult(arr[0].val3 * arr[1].val5));
        }).catch((e) => console.log('pierdola'))
    );
}

//reducer
export const reducer = (state = 0, action) => {
    switch(action.type) {
        case BUTTON_CLICKED:
            return {...state, loading: true}
        case DATA_FETCHED:
            return {...state, loading: false, result: action.payload}
        case MODAL_CLOSED:
            return {...initialState}
        default: return {...state}
    }
  }
