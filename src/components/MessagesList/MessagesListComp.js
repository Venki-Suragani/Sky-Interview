import React from 'react';
import PropTypes from 'prop-types';
import MessagesListRow from './MessagesListRowComp';


const MeesagesList = ({ messages }) => {
    debugger;
  return (
    <div >         
      <table className="table table-striped">
        <thead>
            <tr>
            <th>UserId</th>
            <th>message</th>
            <th>timestamp</th>
            </tr>
        </thead>
        <tbody>
            
        { messages.map( message =>             
                <MessagesListRow message={message} />
            )};     
        
        </tbody>
     </table>
  </div>
  );
};

MeesagesList.propTypes = {
    messages: PropTypes.array.isRequired,
};

export default MeesagesList;
