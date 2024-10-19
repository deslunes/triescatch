// src/index.ts
function tries(callback) {
  let errorCaptured = null;
  const data = {};
  try {
    callback(data);
  } catch (error) {
    errorCaptured = error;
  }
  return {
    data,
    // Inclut l'objet data dans le retour
    catch: function(errorType, catchCallback) {
      if (errorCaptured instanceof errorType) {
        catchCallback(errorCaptured, data);
      }
      return this;
    }
  };
}
export {
  tries as test,
  tries
};
