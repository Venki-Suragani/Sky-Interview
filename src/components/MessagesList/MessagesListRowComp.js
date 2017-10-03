import React from 'react';

const MeesagesListRow = ({ message }) => {
  return (
    <tr>
        <td>{message.userId}</td>
        <td>{message.message}</td>
        <td>{message.timestamp}</td>
    </tr>
  );
};

export default MeesagesListRow;
