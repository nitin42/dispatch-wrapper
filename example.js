const wrapper = require('./main');

// Action types
const FETCH = 'FETCH';
const IDLE = 'IDLE';

// JSON api
const api_source = 'https://www.example.com/api?key=1234';

// Component state
let initialState = {
  status: IDLE,
  data: null
};

// Request wrapper for dispatching the actions.
let Fetcher = (api, dispatch) => {
  wrapper(api, (data) => {
    dispatch({
      type: FETCH,
      payload: data["articles"] // (Optional)
    });
  });
}

// Action creators using `redux-thunk`
let fetch_data = (api) => {
  return (dispatch) => {
    return Fetcher(api, dispatch);
  }
}

// Reducer
let reducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH:
      {...state, data: action.payload, status: 'DONE'}
    default:
      {...state}
  }
}

// React component
class App extends React.component {

  // Fetch the data
  componentWillMount () {
    this.props.fetch_data(api_source);
  }

  render () {
    const render_data = this.props.data.map((item) => {
      return (
        <li key={this.props.data.indexOf(item)}>
          {item}
        </li>
      );
    });

    return (
      <div>
        {this.props.status === 'DONE' ? <ul>{render_data}</ul> : null}
      </div>
    );
  }
}
