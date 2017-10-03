export function getMessages() {
  debugger;
  return fetch('/messages.json')
        .then((response) => response.json())
        .then((responseJson) => {        
          return responseJson;
        }).catch((error) => {
           console.error(error);
        });
}

