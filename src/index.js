function tries(callback) {
  let errorCaptured = null;
  let data = {};

  try {
    if (callback.length > 0) {
      callback(data);
    } else {
      callback();
    }
  } catch (error) {
    errorCaptured = error;
  }

  return {
    data, 
    catch: function(errorType, catchCallback) {
      if (errorCaptured instanceof errorType) {
        catchCallback(errorCaptured, data);
      }
      return this;
    }
  };
}

export { tries }