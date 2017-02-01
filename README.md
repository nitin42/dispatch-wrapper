# dispatch-wrapper

> A request wrapper which makes it easy to dispatch the payload received from a JSON api in your action creators.

## Install
```
npm install --save dispatch-wrapper 
```

## Usage

```javascript
const wrapper = require('dispatch-wrapper');

// Dispatch an action
let Fetcher = (api, dispatch) => {
  wrapper(api, (data) => {
    dispatch({
      type: FETCH,
      payload: data
    });
  });
}

// Action creators using `redux-thunk`
let fetch_data = (api) => {
  return (dispatch) => {
    return Fetcher(api, dispatch);
  }
}
```
Check the complete example [here]()

## API
#### wrapper(api, cb)
The wrapper method to dispatch the payload

##### api
Any JSON api

Type: `string`

##### cb  
A callback function 


## Test
```
npm run test
```

## Contributing
Add unit test for any new or changed functionality

## License
ISC


