export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) { //action.payload.then is the best way available to check if something is a Promise
    return next(action);
  }
  action.payload.then(function(response){
    const newAction = { ...action, payload: response }
    dispatch(newAction);
  });
};
