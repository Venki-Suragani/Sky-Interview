export default function MessageReducer (state = [], action) {
    switch (action.type) {
    
        case 'LOAD_MESSAGES_SUCESS':        
           return action.messages;            
                 
      default:
        return state;
    }
  }
  
