/*global localStorage*/
//unable to properly test  in jest due to window.localstorage not existing
const removeAndSetLocalStorage = (state, key, removeOnly=false) => {
  if(removeOnly){console.log('death or win occured')}
  localStorage.removeItem(key);
  if(!removeOnly){
  const string = JSON.stringify(state);
  localStorage.setItem(key, string);
  }
};

export default removeAndSetLocalStorage;
