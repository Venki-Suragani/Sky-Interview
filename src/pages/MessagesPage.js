import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import propTypes from 'prop-types';
import * as messageAction from '../logic/actions';
import MeesagesList from '../components/MessagesList/MessagesListComp';

 
class Messages extends Component  {  
 
  constructor(props,context) {
    super(props,context);
  }

  render(){ 
    debugger;
    return ( 
      <MeesagesList messages={this.props.MessagesReducer}   />
      );  
  }
}
  
  Messages.propTypes = {   
    MessagesReducer: propTypes.array.isRequired,
    actions: propTypes.object.isRequired
  };

   function mapStateToProps  (state) {       
     debugger;
    return {
      MessagesReducer: state.MessagesReducer
      };
    }
    
    function mapDispatchToProps (dispatch) {
      return {
        actions: bindActionCreators(messageAction,dispatch)
      };
    }
  
  export default  connect(mapStateToProps,mapDispatchToProps)(Messages);




  




