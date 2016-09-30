/**
  * @desc Geolocation service - provides an interface to the Geolocation API with Promises
*/

export const getCurrentPosition = () => new Promise( (resolve, reject) => navigator.geolocation.getCurrentPosition( p => resolve(p), e => reject(e) ) )
