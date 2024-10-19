interface TriesResult<T> {
  data: T;
  catch: (errorType: new (...args: any[]) => Error, catchCallback: (error: Error, data: T) => void) => TriesResult<T>;
}

function tries<T = Record<string, any>>(callback: (data: T) => void | undefined): TriesResult<T> {
  let errorCaptured: Error | null = null;
  const data: T = {} as T; // Objet partagé pour stocker des données

  // Essaie d'exécuter la fonction
  try {
    callback(data); // Passe toujours l'objet data
  } catch (error) {
    errorCaptured = error as Error; // Capture l'erreur
  }

  // Retourne un objet contenant la méthode `catch` et les données modifiées
  return {
    data, // Inclut l'objet data dans le retour
    catch: function(errorType: new (...args: any[]) => Error, catchCallback: (error: Error, data: T) => void): TriesResult<T> {
      // Si une erreur a été capturée et correspond au type d'erreur qu'on a rentré dans le filtre
      if (errorCaptured instanceof errorType) {
        catchCallback(errorCaptured, data); // Appelle le callback avec l'erreur et l'objet data
      }
      return this;
    }
  };
}


export {tries, tries as test}