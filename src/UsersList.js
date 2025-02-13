import React from "react";
import "./UsersList.css";

const UsersList = ({ users }) => {
  return (
    <div className="users-list">
      <h3>Users in Room:</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
 
