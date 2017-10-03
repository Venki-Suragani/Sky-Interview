import { ADD_ITEM } from './constants';
import  * as msgApi from '../Api/messages';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export  function loadMessagesSucess (messages){    
  debugger;
  return {
     type: 'LOAD_MESSAGES_SUCESS',
     messages
   };
 }



export  function loadMessages (){ 
  debugger;  
  return function (dispatch) {
     return msgApi.getMessages().then(         
        messages => dispatch(loadMessagesSucess(messages))        
     ).catch(error => {
       throw error;
     }); 
   };
 }